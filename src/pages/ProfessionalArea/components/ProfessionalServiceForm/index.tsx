import { useEffect, useState, MouseEventHandler } from 'react';
import locale from './locale';
import ProfessionalServiceFormView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';
import { ProfessionalServiceType } from '@/apis/lib/service';
import { UploadFile } from 'antd/lib/upload/interface.d';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox.d';
import { Form } from 'antd';

interface PropsType {
    editMode?: boolean;
    service?: ProfessionalServiceType;
    onSubmit: (payload: ProfessionalServiceType) => void;
}
const ProfessionalServiceForm = ({ editMode=false, service={}, onSubmit }: PropsType) => {
    const { i18n } = useTranslation(LOCALE_KEY);
    const [ payload, setPayload ] = useState<ProfessionalServiceType>(service);
    const [ serviceImages, setServiceImages ] = useState<UploadFile[] | undefined>([]); 
    const [ isGuaranteeActive, setIsGuaranteeActive ] = useState<boolean>(false);
    const [ validForm, setValidForm ] = useState<boolean>(false);
    const [ validServiceImages, setValidServiceImages ] = useState<boolean>(false);
    const [form] = Form.useForm();

    useEffect(()=>{
        if (!payload.imageUrls){
            setPayload({
                ...payload,
                imageUrls: [],
            });
        }
    }, [payload, setPayload]);

    useEffect(()=>{
        if ( validServiceImages && validForm){
            onSubmit(payload);
        }
    }, [validServiceImages, payload, validForm, onSubmit]);

    useEffect(()=>{
        const validateServiceImages = ():boolean => {
            const annotedServiceImages = serviceImages ? serviceImages : [];
            return annotedServiceImages.length > 0;
        }

        setValidServiceImages(validateServiceImages());
    }, [serviceImages]);

    registerLocale(i18n, LOCALE_KEY, locale);



    const onImagesUpadated = (files:UploadFile[] | undefined) => {
        if (files){
            const doneUploadedFiles = files.filter((n)=>n.status === 'done');
            setServiceImages(doneUploadedFiles);
        }
    }

    const handleOnSubmit:MouseEventHandler<HTMLElement> | undefined = () => {
        form.submit();
    }

    const onServiceFormFinish = () => {
        const name = form.getFieldValue('name');
        const description = form.getFieldValue('description');
        const price = form.getFieldValue('price');
        const guarantee = form.getFieldValue('guarantee');
        setPayload({
            ...payload,
            name,
            description,
            price,
            guarantee,
            imageUrls: serviceImages,
        });
        setValidForm(true);
    }

    const onServiceFormFinishFailed = () => {
        setValidForm(false);
    }
    
    const onGuaranteeCheckboxChanged = (e:CheckboxChangeEvent) => {
        setIsGuaranteeActive(e.target.checked);
    }

    const onInputChanged = (fieldName:string, value:string|number) => {
        const field:{[key:string]: string | number} = {};
        field[fieldName] = value;
        form.setFieldsValue(field);
        form.validateFields([fieldName]);
    }

    return (
        <ProfessionalServiceFormView {...{ 
            payload, 
            form,
            isGuaranteeActive,
            onImagesUpadated,
            onServiceFormFinish,
            onServiceFormFinishFailed,
            onGuaranteeCheckboxChanged,
            onInputChanged,
            onSubmit: handleOnSubmit,
        }} />
    )
}

export default ProfessionalServiceForm;

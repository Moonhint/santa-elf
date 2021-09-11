import { useState, useEffect } from 'react';
import locale from './locale';
import ServiceImageUploaderPageView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';
import { UploadFile } from 'antd/lib/upload/interface.d';
import { ImagePreviewModalType, OnUploadChangeProps } from './type';
import APIUtil from '@/shared/helpers/api-utils';

interface PropsType {
    images?: UploadFile[] | undefined;
    onUpdate: (files: UploadFile[]) => void;
}
const ServiceImageUploaderPage = (props: PropsType) => {
    const { onUpdate } = props;
    const { i18n } = useTranslation(LOCALE_KEY);
    const [images, updateImages] = useState<UploadFile[] | undefined>(props.images || []);
    const [mainImages, updateMainImage] = useState<UploadFile[] | undefined>([]);
    const [secondImages, updateSecondImage] = useState<UploadFile[] | undefined>([]);
    const [thirdImages, updateThirdImage] = useState<UploadFile[] | undefined>([]);
    const [forthImages, updateForthImage] = useState<UploadFile[] | undefined>([]);
    const [fifthImages, updateFifthImage] = useState<UploadFile[] | undefined>([]);
    const [ preview, updatePreview ] = useState<ImagePreviewModalType>({
        visible: false,
        imageUrl: '',
        title: '',
    });
    const uploaderInfo = APIUtil.getUploaderInfo();

    useEffect(()=>{
        if (images){
            if (images[0]){
                updateMainImage([images[0]]);
            }
            if (images[1]){
                updateSecondImage([images[1]]);
            }
            if (images[2]){
                updateSecondImage([images[2]]);
            }
            if (images[3]){
                updateSecondImage([images[3]]);
            }
            if (images[4]){
                updateSecondImage([images[4]]);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{
        const compiledImages:UploadFile[] | undefined = [];
        if (mainImages && mainImages?.length > 0){
            compiledImages.push(mainImages[0]);
        }
        if (secondImages && secondImages?.length > 0){
            compiledImages.push(secondImages[0]);
        }
        if (thirdImages && thirdImages?.length > 0){
            compiledImages.push(thirdImages[0]);
        }
        if (forthImages && forthImages?.length > 0){
            compiledImages.push(forthImages[0]);
        }
        if (fifthImages && fifthImages?.length > 0){
            compiledImages.push(fifthImages[0]);
        }

        updateImages(compiledImages);

    }, [mainImages, secondImages, thirdImages, forthImages, fifthImages]);

    useEffect(()=>{
        if (images) onUpdate(images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images]);

    registerLocale(i18n, LOCALE_KEY, locale);
    
    const onUploaderPreview = (file:UploadFile) => {
        updatePreview({
            ...preview,
            visible: true,
            title: file.name,
            imageUrl: file.url || '',
        });
    };

    const onCancelPreview = () => {
        updatePreview({
            ...preview,
            visible: false,
        });
    };

    const onImageUploaderChange = ({ fileList }:OnUploadChangeProps, subject:string) => {
        const convertedFile:UploadFile[] = [];
        fileList.forEach((file) => {
            if (file.response){
                const fileResponse = file.response[0];
                convertedFile.push({
                    uid: file.uid,
                    name: file.name,
                    status: file.status,
                    url: fileResponse.path,
                });
            }else{
                convertedFile.push(file);
            }            
        });
        if (subject === 'main'){
            updateMainImage(convertedFile);
        }else if (subject === 'second'){
            updateSecondImage(convertedFile);
        }else if (subject === 'third'){
            updateThirdImage(convertedFile);
        }else if (subject === 'forth'){
            updateForthImage(convertedFile);
        }else if (subject === 'fifth'){
            updateFifthImage(convertedFile);
        }
    };

    return (
        <ServiceImageUploaderPageView {...{
            images,
            mainImages,
            secondImages,
            thirdImages,
            forthImages,
            fifthImages,
            preview,
            uploaderInfo, 
            onUploaderPreview, 
            onImageUploaderChange,
            onCancelPreview,
        }} />
    )
}

export default ServiceImageUploaderPage;

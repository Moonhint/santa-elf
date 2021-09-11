/** @jsxImportSource @emotion/react */
import { MouseEventHandler } from 'react';
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, InputNumber, Checkbox } from 'antd';
import { ProfessionalServiceType } from '@/apis/lib/service';
import { UploadFile } from 'antd/lib/upload/interface.d';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox.d';
import ServiceImageUploader from './components/ServiceImageUploader';
import InputWrapper from '@/components/InputWrapper';
import style from './style';

const { TextArea } = Input;
const TEXTAREA_AUTO_SIZE = { minRows: 5, maxRows: 20 };

interface PropsType {
    payload: ProfessionalServiceType;
    form: any;
    isGuaranteeActive: boolean;
    onImagesUpadated: (files:UploadFile[] | undefined) => void;
    onServiceFormFinish: () => void;
    onServiceFormFinishFailed: () => void;
    onGuaranteeCheckboxChanged: (e:CheckboxChangeEvent) => void;
    onInputChanged: (fieldName:string, value:string|number) => void;
    onSubmit: MouseEventHandler<HTMLElement> | undefined;
}
const ProfessionalServiceFormView = (props:PropsType) => {
    const { t } = useTranslation(LOCALE_KEY);
    const { payload, onImagesUpadated, onInputChanged, onSubmit } = props;

    const renderLabel = (about:string) => {
        if (about === 'name'){
            return (
                <div css={style.label}>
                    <div className="title">{t('serviceInfo.name.title')}</div>
                    <div className="subtitle">{t('serviceInfo.name.subtitle')}</div>
                </div>
            )
        }else if (about === 'desc') {
            return (
                <div css={style.label}>
                    <div className="title">{t('serviceInfo.description.title')}</div>
                    <div className="subtitle">{t('serviceInfo.description.subtitle')}</div>
                </div>
            )
        }else if (about === 'price') {
            return (
                <div css={style.label}>
                    <div className="title">{t('serviceInfo.price.title')}</div>
                </div>
            )
        }else if (about === 'guarantee') {
            return (
                <div css={style.label}>
                    <Checkbox onChange={props.onGuaranteeCheckboxChanged}>{t('serviceInfo.guarantee.title')}</Checkbox>
                    <div className="subtitle">{t('serviceInfo.guarantee.subtitle')}</div>
                </div>
            )
        }else {
            return null;
        }
    }

    return (
        <div css={style.base}>
            <InputWrapper
                required
                title={t('imagesUpload.title')}
                description={t('imagesUpload.description')}>
                <div css={style.imageUploader}>
                    <ServiceImageUploader images={payload.imageUrls} onUpdate={onImagesUpadated} />
                </div>
            </InputWrapper>
            <InputWrapper
                title={t('serviceInfo.title')}>
                <Form
                    css={style.form}
                    requiredMark={false}
                    name="basic"
                    form={props.form}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 18 }}
                    initialValues={{ remember: true }}
                    onFinish={props.onServiceFormFinish}
                    onFinishFailed={props.onServiceFormFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        colon={false}
                        labelAlign="left"
                        label={renderLabel('name')}
                        rules={[
                            { required: true, message: t('serviceInfo.name.rules.required') }, 
                            { max: 120, message: t('serviceInfo.name.rules.max')}
                        ]}
                    >
                        <div css={style.required}>
                            {t('serviceInfo.require')}
                        </div>
                        <Form.Item name="name" noStyle>
                            <Input 
                                onChange={(e) => onInputChanged('name', e.target.value)} 
                                placeholder={t('serviceInfo.name.placeholder')}
                            />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item
                        colon={false}
                        labelAlign="left"
                        label={renderLabel('desc')}
                        rules={[{ required: true, message: t('serviceInfo.description.rules.required') }]}
                    >   
                        <div css={style.required}>
                            {t('serviceInfo.require')}
                        </div>
                        <Form.Item name="description" noStyle>
                            <TextArea 
                                onChange={(e) => onInputChanged('description', e.target.value)} 
                                autoSize={TEXTAREA_AUTO_SIZE} 
                                placeholder={t('serviceInfo.description.placeholder')} 
                                showCount maxLength={1000}
                            />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item
                        colon={false}
                        labelAlign="left"
                        label={renderLabel('price')}
                        name="price"
                        rules={[{ required: true, message: t('serviceInfo.price.rules.required') }]}
                    >   
                        <div css={style.required}>
                            {t('serviceInfo.require')}
                        </div>
                        <Form.Item name="price" noStyle>
                            <InputNumber
                                css={style.numberInput}
                                onChange={(value) => onInputChanged('price', value)} 
                                placeholder={t('serviceInfo.price.placeholder')}
                                formatter={value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value ? value.replace(/Rp\s?|(,*)/g, '') : 'Rp'}
                            />
                        </Form.Item>
                    </Form.Item>
                    <Form.Item
                        colon={false}
                        labelAlign="left"
                        label={renderLabel('guarantee')}
                        rules={[{ max: 1000, message: t('serviceInfo.guarantee.rules.max') }]}
                    >   
                        <Form.Item name="guarantee" noStyle>
                            <TextArea 
                                autoSize={TEXTAREA_AUTO_SIZE} 
                                disabled={!props.isGuaranteeActive} 
                                placeholder={t('serviceInfo.guarantee.placeholder')} 
                                showCount maxLength={1000}
                            />
                        </Form.Item>
                    </Form.Item>
                </Form>
            </InputWrapper>
            <div css={style.cta}>
                <Button type="primary" size="large" onClick={onSubmit}>{t('upload')}</Button>
            </div>
        </div>
    )
}

export default ProfessionalServiceFormView;
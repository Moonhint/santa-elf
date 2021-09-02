// import { LOCALE_KEY } from './const';
// import { useTranslation } from 'react-i18next';
import { ProfessionalType } from '@/apis/professional';
// import { Form, Input, Button } from 'antd';
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

interface PropsType {
    professional: ProfessionalType | undefined,
    // isLoadingProfessional: boolean | undefined,
    // isErrorProfessional: boolean | undefined,

    // updatedProfessional: ProfessionalType | undefined,
    onBusinessInfoSummited: (values:ProfessionalType) => void,
    onBusinessInfoVerificationFailed: ((errorInfo: ValidateErrorEntity<ProfessionalType>) => void) | undefined,
}
const TemplatePageView = (props:PropsType) => {
    // const { t } = useTranslation(LOCALE_KEY);

    return (
        <div>
            WORK IN PROGRESS
            {/* <div className={}>
                <div className="left-side">
                    <div >

                    </div>
                </div>
                <div className="right-side">

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={props.onBusinessInfoSummited}
                        onFinishFailed={props.onBusinessInfoVerificationFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Business Name"
                            name="businessName"
                            rules={[{ required: true, message: 'Please input your business name!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div> */}
            {/* <div>{JSON.stringify(props.professional?.businessName)}</div> */}
            {/* <Button>{t('view')}</Button> */}
        </div>
    )
}

export default TemplatePageView;
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

interface PropsType {
    title: string;
}

const TemplatePageView = (props:PropsType) => {
    const { t } = useTranslation(LOCALE_KEY);
    return (
        <div>
            {props.title}
            <Button>{t('view')}</Button>
        </div>
    )
}

export default TemplatePageView;
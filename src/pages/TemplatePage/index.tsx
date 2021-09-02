import locale from './locale';
import TemplatePageView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';

const TemplatePage = () => {
    const { i18n } = useTranslation(LOCALE_KEY);

    const title = "Template Page";

    registerLocale(i18n, LOCALE_KEY, locale);
    
    return (
        <TemplatePageView {...{title}} />
    )
}

export default TemplatePage;

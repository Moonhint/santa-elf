import locale from './locale';
import ProfessionalServiceEditPageView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';

const ProfessionalServiceEditPage = () => {
    const { i18n } = useTranslation(LOCALE_KEY);

    const title = "ProfessionalServiceEdit Page";

    registerLocale(i18n, LOCALE_KEY, locale);
    
    return (
        <ProfessionalServiceEditPageView {...{title}} />
    )
}

export default ProfessionalServiceEditPage;

import locale from './locale';
import ProfessionalProfileListView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';

const ProfessionalProfileList = () => {
    const { i18n } = useTranslation(LOCALE_KEY);

    const title = "ProfessionalProfileList";

    registerLocale(i18n, LOCALE_KEY, locale);
    
    return (
        <ProfessionalProfileListView {...{title}} />
    )
}

export default ProfessionalProfileList;

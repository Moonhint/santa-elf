import locale from './locale';
import ProfessionalServiceListView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';

const ProfessionalServiceList = () => {
    const { i18n } = useTranslation(LOCALE_KEY);

    const title = "Service List";

    registerLocale(i18n, LOCALE_KEY, locale);
    
    return (
        <ProfessionalServiceListView {...{title}} />
    )
}

export default ProfessionalServiceList;

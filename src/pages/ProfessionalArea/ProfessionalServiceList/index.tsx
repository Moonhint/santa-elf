import locale from './locale';
import ProfessionalServiceListView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';
import { ListCounterProvider } from './contexts/listCounter';

const ProfessionalServiceList = () => {
    const { i18n } = useTranslation(LOCALE_KEY);

    registerLocale(i18n, LOCALE_KEY, locale);
        
    return (
        <ListCounterProvider>
            <ProfessionalServiceListView {...{ }} />
        </ListCounterProvider>
    )
}

export default ProfessionalServiceList;

import locale from './locale';
import ServiceListItemView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';
import { ProfessionalServiceType } from '@apis/lib/service';

interface PropsType {
    service: ProfessionalServiceType;
}
const ServiceListItem = (props: PropsType) => {
    const { service } = props;
    const { i18n } = useTranslation(LOCALE_KEY);

    registerLocale(i18n, LOCALE_KEY, locale);
    
    return (
        <ServiceListItemView {...{ service }} />
    )
}

export default ServiceListItem;

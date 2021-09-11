import locale from './locale';
import ServiceListItemPageView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';
import { ProfessionalServiceType } from '@apis/lib/service';
import currency from '@/shared/helpers/currency';

interface PropsType {
    service: ProfessionalServiceType;
}
const ServiceListItemPage = (props:PropsType) => {
    const { service } = props;
    const { i18n } = useTranslation(LOCALE_KEY);

    if (!service) return null;

    const serviceImgs = service.imageUrls;
    const coverImageUrl:string = (serviceImgs && serviceImgs.length > 0) ? String(serviceImgs[0].url) : '';
    const name:string = (service.name) ? service.name : '';
    const viewCount:number = (service.viewsCount) ? service.viewsCount : 0;
    const finishedCount:number = (service.finishedCount) ? service.finishedCount : 0;
    const priceStr:string = (service.price) ? String(currency(service.price, "splitter")) : '0';
    const active:boolean = (service.isActive) ? Boolean(service.isActive) : false;
    const adminChecking:boolean = (service.isAcknowledge) ? Boolean(service.isAcknowledge) : false;
    const editUrl:string = `/edit-service/${service.id}`; 
    
    registerLocale(i18n, LOCALE_KEY, locale);
    
    return (
        <ServiceListItemPageView {...{ 
            coverImageUrl,
            name,
            viewCount,
            finishedCount,
            priceStr,
            active,
            adminChecking,
            editUrl,
        }} />
    )
}

export default ServiceListItemPage;

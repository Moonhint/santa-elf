import { useEffect, useState } from 'react';
import locale from './locale';
import ServiceListView from './view';
import { LOCALE_KEY, ServiceState } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';
import { getMyServiceIndexUrl, ProfessionalServiceType } from '@/apis/lib/service';
import useFetch from '@/apis/useFetch';
import util from '@/shared/helpers/api-utils';

type ServiceIndexType = ProfessionalServiceType[] | never[];
interface PropsType {
    state?: ServiceState;
}
const ServiceList = ({state = 'ALL'}:PropsType) => {
    const { i18n } = useTranslation(LOCALE_KEY);
    const [ services, updateServices ] = useState<ServiceIndexType>([]);
    const query:{state?:string;} = {};
    if (state === 'ACTIVE'){
        query['state'] = 'findBy[]=eq,isActive,true,boolean';
    }
    if (state === 'NON_ACTIVE'){
        query['state'] = 'findBy[]=eq,isActive,false,boolean';
    }

    const INDEX_URL:string = getMyServiceIndexUrl() + `?${util.queryToString(query)}`;
    const { data, error, loading } = useFetch<ServiceIndexType>(INDEX_URL);

    useEffect(()=>{
        if (data) updateServices(data);
    }, [data]);

    if (loading) return <div>Loading</div>;
    if (error) return <div>Error</div>;

    registerLocale(i18n, LOCALE_KEY, locale);
    
    return (
        <ServiceListView {...{services}} />
    )
}

export default ServiceList;

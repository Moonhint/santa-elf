// import { useEffect, useReducer } from "react";
import locale from './locale';
import ProfessionalServiceListView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';
import useFetch from '@apis/useFetch';
import { getIndexUrl, IndexProfessionalReturnType } from '@apis/lib/service';

const ProfessionalServiceList = () => {
    const { i18n } = useTranslation(LOCALE_KEY);

    const INDEX_URL = getIndexUrl();
    const { data, error, loading } = useFetch<IndexProfessionalReturnType>(INDEX_URL);

    registerLocale(i18n, LOCALE_KEY, locale);
 
    if (error) return null;
    if (loading) return <div>Loading...</div>;
    if (!data || data.data.length === 0) return <div>No Data</div>;
    
    return (
        <ProfessionalServiceListView {...{services: data.data}} />
    )
}

export default ProfessionalServiceList;

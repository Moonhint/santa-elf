import locale from './locale';
import ProfessionalBusinessDetailView from './view';
import { useState, useMemo, useEffect } from 'react';
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { getProfessionalDetailId } from '@/shared/helpers/userCred'; 
import { useTranslation } from 'react-i18next';
import { apiPath, ProfessionalType, updateProfessionalById } from '@/apis/professional';
import useFetch from '@/apis/useFetch';

const ProfessionalBusinessDetail = () => {
    const { i18n } = useTranslation(LOCALE_KEY);
    const [ professional, updateProfessional ] = useState<ProfessionalType | undefined>();
    const professionalDetailId = useMemo(getProfessionalDetailId, []);
    const SHOW_PROFESSIONAL_API = `${process.env.REACT_APP_API_URL}/${apiPath}/show/${professionalDetailId}`;

    const { data, loading, error } = useFetch<ProfessionalType>(SHOW_PROFESSIONAL_API);

    useEffect(()=>{
        if (data) updateProfessional(data);
    }, [data]);

    if (loading) return <div>Loading</div>;
    if (error) return <div>Error</div>;

    registerLocale(i18n, LOCALE_KEY, locale);

    const handleBusinessInfoSummited = async (values:ProfessionalType) => {
        const { data, error } = await updateProfessionalById(professionalDetailId, values);
        if (error) console.error(error);
        if (data) updateProfessional(data);
    }

    const handleBusinessInfoVerificationFailed = ({errorFields}:ValidateErrorEntity) => {
        console.log(errorFields);
    }

    return (
        <ProfessionalBusinessDetailView {...{
            professional,
            onBusinessInfoSummited: handleBusinessInfoSummited,
            onBusinessInfoVerificationFailed: handleBusinessInfoVerificationFailed
        }} />
    )
}

export default ProfessionalBusinessDetail;

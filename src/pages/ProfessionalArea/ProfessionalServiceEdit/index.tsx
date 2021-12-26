import { useCallback, useMemo, useEffect } from 'react';
import locale from './locale';
import ProfessionalServiceEditView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';
import { ProfessionalServiceType, getShowUrlById, updateServiceById } from '@/apis/lib/service';
import { getProfessionalDetailId, } from '@/shared/helpers/userCred'; 
import useFetch from '@/apis/useFetch';
import { useParams } from 'react-router-dom';

const ProfessionalServiceEdit = () => {
    const { i18n } = useTranslation(LOCALE_KEY);
    const professionalDetailId = useMemo(getProfessionalDetailId, []);
    const { id } = useParams<{ id: string }>();

    registerLocale(i18n, LOCALE_KEY, locale);

    const SHOW_URL:string = getShowUrlById(Number(id));
    const { data, error, loading } = useFetch<ProfessionalServiceType>(SHOW_URL);

    useEffect(()=>{
        console.log(data, "data");
    }, [data]);

    useEffect(()=>{
        console.log(error, "error");
    }, [error]);

    useEffect(()=>{
        console.log(loading, "loading");
    }, [loading]);

    const onSubmit = useCallback(async (payload: ProfessionalServiceType) => {
        const payloadWithRelationId = {
            ...payload,
            professionDetailId: professionalDetailId,
        }
        const { data, error } = await updateServiceById(payload.id, payloadWithRelationId);
        if (error) console.error(error);
        if (data) console.log(data);
    }, [professionalDetailId]);

    return (
        <ProfessionalServiceEditView {...{ onSubmit }} />
    )
}

export default ProfessionalServiceEdit;

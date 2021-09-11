import { useState, useEffect, useMemo } from 'react';
import locale from './locale';
import ShopStatusView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';
import { getProfessionalDetailId } from '@/shared/helpers/userCred'; 
import { ProfessionalType, getShowUrlById, updateProfessionalById } from '@/apis/lib/professional';
import useFetch from '@/apis/useFetch';

const ShopStatus = () => {
    const { i18n } = useTranslation(LOCALE_KEY);
    const [isOffDay, updateIsOffDay] = useState<boolean>(false);
    const professionalDetailId = useMemo(getProfessionalDetailId, []);
    const SHOW_PROFESSIONAL_API = getShowUrlById(professionalDetailId);
    const { data, loading, error } = useFetch<ProfessionalType>(SHOW_PROFESSIONAL_API);

    useEffect(()=>{
        if (data) updateIsOffDay(data.isOffDay || false);
    }, [data]);

    if (loading) return <div>Loading</div>;
    if (error) return <div>Error</div>;

    registerLocale(i18n, LOCALE_KEY, locale);

    const onDayOffToggled = async (toggleValue: boolean) => {
        const { data, error } = await updateProfessionalById(professionalDetailId, {
            isOffDay: toggleValue,
        });
        if (error) console.error(error);
        if (data) updateIsOffDay(data.isOffDay || false);
    }

    return (
        <ShopStatusView {...{isOffDay, onDayOffToggled}} />
    )
}

export default ShopStatus;

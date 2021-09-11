import { useMemo, useCallback } from 'react';
import locale from './locale';
import ProfessionalServiceCreateView from './view';
import { LOCALE_KEY } from './const';
import { registerLocale } from '@/shared/helpers/language';
import { useTranslation } from 'react-i18next';
import { ProfessionalServiceType, createService } from '@/apis/lib/service';
import { getProfessionalDetailId } from '@/shared/helpers/userCred'; 

const ProfessionalServiceCreate = () => {
    const { i18n } = useTranslation(LOCALE_KEY);
    const professionalDetailId = useMemo(getProfessionalDetailId, []);

    registerLocale(i18n, LOCALE_KEY, locale);

    const onSubmit = useCallback(async (payload: ProfessionalServiceType) => {
        const payloadWithRelationId = {
            ...payload,
            professionDetailId: professionalDetailId,
        }
        const { data, error } = await createService(payloadWithRelationId);
        if (error) console.error(error);
        if (data) console.log(data);
    }, [professionalDetailId]);

    return (
        <ProfessionalServiceCreateView {...{ onSubmit }} />
    )
}

export default ProfessionalServiceCreate;

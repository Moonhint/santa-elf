import { useEffect } from "react";
import ProfessionalMembershipView from './view';
import locale from './locale';
import { useTranslation } from 'react-i18next';
import useProfessionalMembership from '@/apis/useProfessionalMembership';

const ProfessionalMembership = () => {

    const { i18n } = useTranslation('professional-membership');
    const { 
        activeProfessionalMembership, 
        noActiveMembership,
        isLoadingActiveProfessionalMembership, 
        geActiveProfessionalMembership 
    } = useProfessionalMembership();

    i18n.addResourceBundle('en', 'professional-membership', locale.en);
    i18n.addResourceBundle('id', 'professional-membership', locale.id);

    useEffect(()=>{
        geActiveProfessionalMembership();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ProfessionalMembershipView 
            activeProfessionalMembership={activeProfessionalMembership}
            noActiveMembership={noActiveMembership}
            isLoadingActiveProfessionalMembership={isLoadingActiveProfessionalMembership}
        />
    )
}

export default ProfessionalMembership;


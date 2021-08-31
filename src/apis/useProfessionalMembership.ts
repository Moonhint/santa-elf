import { useState } from "react";
import axios from "@shared/helpers/axios";
const apiPath = 'api/v2/profiles';

export type MembershipType = {
    crowdfundConversionChance: number
    expiredInDay: number
    featureChance: number
    freePropertyAdvertise: boolean
    id: number
    introOffer: number
    isTrial: boolean
    locationIn: number
    makeProfessionalFeatured: boolean
    makeProfessionalVerified: boolean
    mediaPhotoAbility: boolean
    mediaVideoAbility: boolean
    membershipPrice: number
    name: string
    personalWebsite: boolean
    projectListing: number
    propertyAdvertiseChance: number
    propertygrabPoint: number
    referralCommisionPercentage: number
    secureProfessionalPayment: boolean
    type: string
    createdAt: string
    updatedAt: string
}

export type ActiveProfessionalType = {
    id: number
    Membership: MembershipType
    membershipId: number
    memberId: number
    isActive: boolean
    haveBeenUsed: boolean
    expiredAt: string
    createdAt: string
    updatedAt: string
}

export default function useProfessionalMembership() {

    const [activeProfessionalMembership, updateActiveProfessionalMembership] = useState<ActiveProfessionalType | undefined>();
    const [noActiveMembership, updateNoActiveMembership] = useState(false);
    const [isLoadingActiveProfessionalMembership, updateIsLoadingActiveProfessionalMembership] = useState(true);
    
    const geActiveProfessionalMembership = async () => {
        updateIsLoadingActiveProfessionalMembership(true);

        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${apiPath}/my-professional-membership`);
            updateActiveProfessionalMembership(data);
        } catch (error) {
            if (error.response.status === 422) {
                if (error.response.data.error.cause.startsWith('membership rule cannot be found by that member')){
                    updateNoActiveMembership(true);
                }
            }
        }
        updateIsLoadingActiveProfessionalMembership(false);
    }

    return { 
        activeProfessionalMembership, 
        noActiveMembership,
        isLoadingActiveProfessionalMembership, 
        geActiveProfessionalMembership 
    };
}

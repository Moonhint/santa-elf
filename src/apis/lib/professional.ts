import axios from "@shared/helpers/axios";
import constructErrorResponse, { ErrorResponseType } from '../errorResponse';

export const apiPath = 'api/v2/profession-details';

export type ProfessionalType = {
    id?: number
    isActive?: boolean,
    addressLat?: string,
    addressLong?: string,
    addressCountry?: string,
    addressProvince?: string,
    addressCity?: string,
    addressDistrict?: string,
    addressVillage?: string,
    addressStreet?: string,
    addressPostCode?: string,
    addressAddition?: string,
    businessPhoneNumber?: string,
    businessPhoneCode?: string,
    businessPhoneIso?: string,
    speciality?: object,
    portfolios?: object,
    isVerified?: boolean,
    verifiedAt?: boolean,
    boostedUntil?: Date,
    isBoosted?: boolean
    identifierImg?: string,
    businessDescription?: string,
    priceRanges?: string,
    businessName?: string,
    businessPermits?: object,
    coverageArea?: object,
    isOffDay?: boolean,
    availableDays?: object,
    workHours?: string,
    businessProfilePicUrl?: string,
    customProfessionFill?: string,
    ableToUseProfessionalFeatures?: boolean,
    ableToUseProfessionalPayment?: boolean,
    personalWebsiteUrl?: string,
    createdAt?: string
    updatedAt?: string
}


type ShowParamsType = number | null;
export const getShowUrlById = (id:ShowParamsType):string => {
    if (!id){
        throw Error('invalid params id');
    }else{
        return `${process.env.REACT_APP_API_URL}/${apiPath}/show/${id}`;
    }
}


interface UpdateResponseType {
    data: ProfessionalType | undefined;
    error: ErrorResponseType | undefined;
};
export const updateProfessionalById = async (id: number | null, params:ProfessionalType):Promise<UpdateResponseType> => {
    let response:UpdateResponseType = {
        data: undefined,
        error: undefined,
    }
    if (!id) {
        response.error = constructErrorResponse({errorMessage:'invalid params passed -> id'});
    }else{
        try{
            const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/${apiPath}/update/${id}`, { ...params });
            response.data = data;
        }catch(error){
            let errorMessage = error.response.data;
            let errorStatus = error.response.status;
            if (typeof errorMessage !== 'string' && errorMessage.error){
                errorMessage = error.response.data.error.cause;
            }
            response.error = constructErrorResponse({errorMessage, errorStatus});
        }
    }
    return response;
}

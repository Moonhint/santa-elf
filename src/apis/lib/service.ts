import axios from "@shared/helpers/axios";
import constructErrorResponse, { ErrorResponseType } from '../errorResponse';
import { UploadFile } from 'antd/lib/upload/interface.d';

export const apiPath = 'api/v2/professional-services';
export const profileApiPath = 'api/v2/profiles';

export type ProfessionalServiceType = {
    id?: number
    isBoosted?: boolean;
    isActive?: boolean;
    isAcknowledge?: boolean;
    imageUrls?: Array<UploadFile>;
    name?: string;
    description?: string;
    guarantee?: string;
    totalRatingCount?: number;
    ratingAverage?: number;
    ratingOneCount?: number;
    ratingTwoCount?: number;
    ratingThreeCount?: number;
    ratingFourCount?: number;
    ratingFiveCount?: number;
    price?: number;
    viewsCount?: number;
    finishedCount?: number;
    createdAt?: string
    updatedAt?: string
}


export const getIndexUrl = ():string => {
    return `${process.env.REACT_APP_API_URL}/${apiPath}/index`;
}

export const getMyServiceIndexUrl = ():string => {
    return `${process.env.REACT_APP_API_URL}/${profileApiPath}/my-professional-service`;
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
    data: ProfessionalServiceType | undefined;
    error: ErrorResponseType | undefined;
};
export const updateServiceById = async (id: number | null, params:ProfessionalServiceType):Promise<UpdateResponseType> => {
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


interface CreateResponseType {
    data: ProfessionalServiceType | undefined;
    error: ErrorResponseType | undefined;
};
export const createService = async (params:ProfessionalServiceType):Promise<CreateResponseType> => {
    let response:UpdateResponseType = {
        data: undefined,
        error: undefined,
    }
    try{
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/${apiPath}/create`, { ...params });
        response.data = data;
    }catch(error){
        let errorMessage = error.response.data;
        let errorStatus = error.response.status;
        if (typeof errorMessage !== 'string' && errorMessage.error){
            errorMessage = error.response.data.error.cause;
        }
        response.error = constructErrorResponse({errorMessage, errorStatus});
    }
    return response;
}

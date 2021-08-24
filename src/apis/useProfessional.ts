import { useState } from "react";
import { apiQueryType } from '@shared/types/apis';
import axios from "@shared/helpers/axios";
import util from "@shared/helpers/api-utils";
const apiPath = 'api/v2/profession-details';

export type ProfessionalType = {
    id: number
    cname: string
    ilustrationUrl: string | null
    nameen: string
    nameid: string
    createdAt: string
    updatedAt: string
}

export default function useProfessional() {

    const [professionals, updateProfessionals] = useState<[ProfessionalType] | never[]>([]);
    const [isLoadingData, updateIsLoadingData] = useState(true);
    
    const getAllProfessionals = async (query?: apiQueryType) => {
        updateIsLoadingData(true);
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${apiPath}/index?${util.queryToString(query)}`);
        updateProfessionals(data.data);
        updateIsLoadingData(false);
    }

    return { 
        professionals, 
        isLoadingDataProfessionals: isLoadingData, 
        getAllProfessionals 
    };
}

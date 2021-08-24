import { useState } from "react";
import { apiQueryType } from '@shared/types/apis';
import axios from "@shared/helpers/axios";
import util from "@shared/helpers/api-utils";
const apiPath = 'api/v2/professions';

export type ProfessionType = {
    id: number
    cname: string
    ilustrationUrl: string | null
    nameen: string
    nameid: string
    createdAt: string
    updatedAt: string
}

export default function useProfession() {

    const [professions, updateProfessions] = useState<[ProfessionType] | never[]>([]);
    const [isLoadingData, updateIsLoadingData] = useState(true);
    
    const getAllProfessions = async (query?: apiQueryType) => {
        updateIsLoadingData(true);
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${apiPath}/index?${util.queryToString(query)}`);
        updateProfessions(data.data);
        updateIsLoadingData(false);
    }

    return { 
        professions, 
        isLoadingDataProfessions: isLoadingData, 
        getAllProfessions 
    };
}

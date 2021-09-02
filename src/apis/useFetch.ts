import { useState, useEffect } from 'react';
import axios from "@shared/helpers/axios";

const useFetchAPI = <Type>(url:string) => {
    const [data, updateData] = useState<Type>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [refetchCount, updateRefetchCount] = useState(0);

    const refetch = ():void => {
        updateRefetchCount(refetchCount + 1);
    }

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            if (url){
                try {
                    const { data } = await axios.get(url);
                    updateData(data);
                    setLoading(false);
                }catch(err){
                    setError(true);
                }finally{   
                    setLoading(false);
                }
            }
        }
        fetchData();
    }, [refetchCount, url]);

    return { data, loading, error, refetch};
}

export default useFetchAPI;

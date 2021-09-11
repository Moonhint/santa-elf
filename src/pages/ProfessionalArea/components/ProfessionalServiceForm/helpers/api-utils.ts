import { apiQueryType } from '@shared/types/apis';

const util =  {
    getUploaderInfo: () => {
      const uploaderUrl = `${process.env.REACT_APP_API_URL}/api/v2/uploads/gcs`;
      const accessToken = localStorage.getItem('accessToken');
      return {
        url: uploaderUrl,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    },
    queryToString: (query?: apiQueryType) => {
      let queryStr = '';
      if (query){
        let keys:string[] = Object.keys(query);
        for (let index = 0; index < keys.length; index++) {
          const element = keys[index];
          let key = element;
          let value = query[key];
          if (element.startsWith('findBy')){
            key = 'findBy[]';
            value = query[element];
          }
          if (element.startsWith('filterBy')){
            key = 'filterBy[]';
            value = query[element];
          }
          if (element.startsWith('orValue')){
            key = 'orValue[]';
            value = query[element];
          }
          if (element === 'limitBy'){
            key = 'limit';
            value = query[element];
          }
          if (element === 'offsetBy'){
            key = 'offset';
            value = query[element];
          }
    
          if (index === 0){
            queryStr = `${key}=${value}&`;
          }else if (index === (keys.length - 1)){
            queryStr = `${queryStr}${key}=${value}`
          }else{
            queryStr = `${queryStr}${key}=${value}&`
          }
        }
      }
      return queryStr;
    }
  }
  
  export default util;
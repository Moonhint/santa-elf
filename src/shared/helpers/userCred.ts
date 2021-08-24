export const removeUserCred = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('member');
    localStorage.removeItem('memberActivated');
    localStorage.removeItem('lastLogin');
    localStorage.removeItem('LS_ROUTE_KEY');
}

const checkIfTokenExpired = (token:string | null) => {
    let validCred = false;
    if (token){
      let expiredInDay:number = parseInt(process.env.REACT_APP_TOKEN_EXPIRED_IN_DAY!) || 1;
      let lastLogin:number = parseInt(localStorage.getItem('lastLogin')!) || 0;
      let tokenExpiredDate = 0;
      let today:number = Date.now();
      tokenExpiredDate = lastLogin + (expiredInDay * 86400000);
      if (tokenExpiredDate > today) {
        validCred = true;
      }else{
        removeUserCred();
      }
    }else{
      validCred = false;
    }
    return validCred;
}

export const isLogin = ():boolean => {
    const LOCAL_STORAGE_KEY = 'accessToken';
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY);
    return checkIfTokenExpired(accessToken);
}

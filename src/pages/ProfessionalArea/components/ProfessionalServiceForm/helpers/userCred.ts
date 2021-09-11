const LS_KEY = {
  ACCESS_TOKEN: 'accessToken',
  MEMBER: 'member',
  LANG: 'slang',
  LAST_LOGIN: 'lastLogin',
  MEMBER_ACTIVATED: 'memberActivated',
  LAST_ROUTE_KEY: 'LS_ROUTE_KEY',
};

export const removeUserCred = () => {
    localStorage.removeItem(LS_KEY.ACCESS_TOKEN);
    localStorage.removeItem(LS_KEY.MEMBER);
    localStorage.removeItem(LS_KEY.MEMBER_ACTIVATED);
    localStorage.removeItem(LS_KEY.LAST_LOGIN);
    localStorage.removeItem(LS_KEY.LAST_ROUTE_KEY);
}

const checkIfTokenExpired = (token:string | null) => {
    let validCred = false;
    if (token){
      let expiredInDay:number = parseInt(process.env.REACT_APP_TOKEN_EXPIRED_IN_DAY!) || 1;
      let lastLogin:number = parseInt(localStorage.getItem(LS_KEY.LAST_LOGIN)!) || 0;
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
    const accessToken = localStorage.getItem(LS_KEY.ACCESS_TOKEN);
    return checkIfTokenExpired(accessToken);
}

export interface LsMemberType {
  ableToUseProfessionalFeatures: boolean;
  accProjectListingChance: number;
  accPropertyAdvertiseChance: number;
  email: string;
  name: string;
  professionDetailId: number | null;
  professionalVerified: boolean,
  profilePicUrl: string | null;
  sn: number;
  username: string;
}
export const getCurrentMember = ():LsMemberType => {
  return JSON.parse(localStorage.getItem(LS_KEY.MEMBER) || "");
}

export const getProfessionalDetailId = ():number | null => {
  const member = getCurrentMember();
  return member?.professionDetailId;
}

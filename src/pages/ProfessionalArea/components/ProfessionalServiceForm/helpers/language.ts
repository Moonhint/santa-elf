type localeType = {
    id: object,
    en: object,
}
interface i18n {
    addResourceBundle: (params1:string, param2:string, params3:object) => void;
};
  
export const registerLocale = (i18n:i18n, key:string, locale:localeType) => {
    i18n.addResourceBundle('en', key, locale.en);
    i18n.addResourceBundle('id', key, locale.id);
}
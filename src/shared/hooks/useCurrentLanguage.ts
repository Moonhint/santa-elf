import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function useCurrentLanguage() {
    const LOCAL_STORAGE_KEY = 'slang';
    const initCurrentLang = localStorage.getItem(LOCAL_STORAGE_KEY);

    const [currentLang, updateCurrentLanguage] = useState(initCurrentLang);
    const { i18n } = useTranslation();

    const setCurrentLanguage = (value:string):void => {
        localStorage.setItem(LOCAL_STORAGE_KEY, value);
        updateCurrentLanguage(value);
        i18n.changeLanguage(value);
    }
    const toggleCurrentLanguage = ():void => {
        let toggledValue = currentLang === 'id' ? 'en': 'id';
        localStorage.setItem(LOCAL_STORAGE_KEY, toggledValue);
        updateCurrentLanguage(toggledValue);
        i18n.changeLanguage(toggledValue);
    }
    return { currentLang, setCurrentLanguage, toggleCurrentLanguage };
}

import MobileNavbarView from './view';
import locale from './locale';
import { useTranslation } from 'react-i18next';
import { isLogin } from '@shared/helpers/userCred';
import useCurrentLanguage from '@shared/hooks/useCurrentLanguage';

const MobileNavbar = () => {
    const { currentLang, toggleCurrentLanguage } = useCurrentLanguage();
    const { i18n } = useTranslation('mobile-navbar');

    i18n.addResourceBundle('en', 'mobile-navbar', locale.en);
    i18n.addResourceBundle('id', 'mobile-navbar', locale.id);

    const isAlreadyLogin = isLogin();

    return (
        <MobileNavbarView 
            currentLang={currentLang}
            isAlreadyLogin={isAlreadyLogin}
            // onLogout={handleLogout}
            // onShowSugesstionModal={handleShowSugesstionModal}
            // onLanguageSubMenuClicked={handleLanguageSubMenuClicked} 
        />
    )
}

export default MobileNavbar;
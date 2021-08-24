import NavbarView from './view';
import locale from './locale';
import { useTranslation } from 'react-i18next';
import { isLogin } from '@shared/helpers/userCred';
import useCurrentLanguage from '@shared/hooks/useCurrentLanguage';

const Navbar = () => {

    const { currentLang, toggleCurrentLanguage } = useCurrentLanguage();
    const { i18n } = useTranslation('navbar');
    i18n.addResourceBundle('en', 'navbar', locale.en);
    i18n.addResourceBundle('id', 'navbar', locale.id);

    const handleLanguageSubMenuClicked = () => {
        toggleCurrentLanguage();
    }

    const handleLogout = () => {

    }

    const handleShowSugesstionModal = () => {

    }

    const isAlreadyLogin = isLogin();

    return (
        <NavbarView 
            currentLang={currentLang}
            isAlreadyLogin={isAlreadyLogin}
            onLogout={handleLogout}
            onShowSugesstionModal={handleShowSugesstionModal}
            onLanguageSubMenuClicked={handleLanguageSubMenuClicked} 
        />
    )
}

export default Navbar;
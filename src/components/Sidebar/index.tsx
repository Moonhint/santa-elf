import useSidebarState from './states';
import SidebarView from './view';
import locale from './locale';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { value, dispatcher } = useSidebarState();
    const { i18n } = useTranslation('sidebar');
    
    i18n.addResourceBundle('en', 'sidebar', locale.en);
    i18n.addResourceBundle('id', 'sidebar', locale.id);

    const handleCollapse = (collapsed:boolean):void => {
        dispatcher('SET-COLLAPSED-VALUE', { collapsed });
    };    

    return (
        <SidebarView 
            collapsed={value.collapsed}
            onCollapse={handleCollapse}
        />
    )
}

export default Navbar;
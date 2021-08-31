import useSidebarState from './states';
import SidebarView from './view';
import locale from './locale';
import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";

type PropsType = {
    url: string;
    children?: React.ReactNode;
};
const Sidebar = (props:PropsType) => {

    const { value, dispatcher } = useSidebarState();
    const { i18n } = useTranslation('sidebar');
    const location = useLocation();
    
    i18n.addResourceBundle('en', 'sidebar', locale.en);
    i18n.addResourceBundle('id', 'sidebar', locale.id);

    const handleCollapse = (collapsed:boolean):void => {
        dispatcher('SET-COLLAPSED-VALUE', { collapsed });
    };    

    interface menuSelectedPropsType {
        key: string,
    }
    const handleMenuSelected = ({ key }:menuSelectedPropsType):void => {
        dispatcher('SET-SELECTED-MENU-VALUE', { selectedMenu: [key] });
    }

    const findSelectedMenuOnFirstLoaded = useCallback(():void => {
        const lastPath = location.pathname.split('/').pop() || 'membership';
        dispatcher('SET-SELECTED-MENU-VALUE', { selectedMenu: [lastPath] });
    }, [location.pathname, dispatcher]);

    useEffect(()=>{
        findSelectedMenuOnFirstLoaded();
    },[findSelectedMenuOnFirstLoaded]);

    return (
        <SidebarView 
            collapsed={value.collapsed}
            selectedMenu={value.selectedMenu}
            onCollapse={handleCollapse}
            onMenuSelected={handleMenuSelected}
            {...props}
        />
    )
}

export default Sidebar;
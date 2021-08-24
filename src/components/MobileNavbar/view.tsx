/** @jsxImportSource @emotion/react */
import { Button } from 'antd';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { importAllImages } from '@/shared/helpers/images-importer';
import { MenuOutlined } from '@ant-design/icons';
import style from './style';
import logoBlueWebp from './imgs/logo-blue.webp';
import logoBluePng from './imgs/logo-blue.png';

const OUTSIDE_HOST = process.env.REACT_APP_VUE_CLIENT_URL;

// const generatePictureElem = (assetName:string) => {
//     return (
//         <picture css={style.navPicIcon}>
//             <source srcSet={images[`${assetName}.webp`]} type="image/webp"/>
//             <img src={images[`${assetName}.png`]} alt=""/>
//         </picture>
//     )
// }

type MobileNavbarViewPropsType = {
    currentLang: string | null;
    isAlreadyLogin: boolean;
    // onLanguageSubMenuClicked: () => void;
    // onLogout: () => void;
    // onShowSugesstionModal: () => void;
}

const MobileNavbarView = (props:MobileNavbarViewPropsType) => {

    const [ t ] = useTranslation('navbar');

    const renderLoginButton = () => {
        if (props.isAlreadyLogin) {
            return null;
        }else {
            return (
                <a href={`${OUTSIDE_HOST}/login`}>
                    <Button type="primary" css={style.navWithButton}>
                        {t('login')}
                    </Button>
                </a>
            )
        }
    }

    return (
        <div css={style.base}>
            <div css={style.containerLogo} className="container-logo">
                <a href={`${OUTSIDE_HOST}`}>
                    <picture>
                        <source srcSet={logoBlueWebp} type="image/webp"/>
                        <img src={logoBluePng} alt="Logo"/>
                    </picture>
                </a>
            </div>
            <div className="container-menu">
                <a href={`${OUTSIDE_HOST}?display-nav=1`}>
                    <MenuOutlined />
                </a>
            </div>
        </div>
    )
}

export default MobileNavbarView;
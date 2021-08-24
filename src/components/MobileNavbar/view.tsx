/** @jsxImportSource @emotion/react */
import { MenuOutlined } from '@ant-design/icons';
import style from './style';
import logoBlueWebp from './imgs/logo-blue.webp';
import logoBluePng from './imgs/logo-blue.png';

const OUTSIDE_HOST = process.env.REACT_APP_VUE_CLIENT_URL;

const MobileNavbarView = () => {
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
/** @jsxImportSource @emotion/react */
import { Menu, Dropdown, Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { importAllImages } from '@/shared/helpers/images-importer';
import { UserOutlined } from '@ant-design/icons';
import style from './style';

// images providers
const shareImageContexts = require.context('@shared/imgs/', false, /\.(png|jpe?g|svg|webp)$/);
const imageContexts = require.context('./imgs/', false, /\.(png|jpe?g|svg|webp)$/);
const shareImages = importAllImages(shareImageContexts);
const images = importAllImages(imageContexts);

const OUTSIDE_HOST = process.env.REACT_APP_VUE_CLIENT_URL;
const BLOG_URL = 'https://propertigrab.wordpress.com';

const generatePictureElem = (assetName:string) => {
    return (
        <picture css={style.navPicIcon}>
            <source srcSet={images[`${assetName}.webp`]} type="image/webp"/>
            <img src={images[`${assetName}.png`]} alt=""/>
        </picture>
    )
}

type NavbarViewPropsType = {
    currentLang: string | null;
    isAlreadyLogin: boolean;
    onLanguageSubMenuClicked: () => void;
    onLogout: () => void;
    onShowSugesstionModal: () => void;
}

const NavbarView = (props:NavbarViewPropsType) => {

    const [ t ] = useTranslation('navbar');

    const renderSearchNavigationSubMenu = (
        <Menu>
            <Menu.Item icon={generatePictureElem('ico-beli')} key="search-buy">
                <a href={`${OUTSIDE_HOST}/property-list?usage=sell&type=propertyAdvertisement`}>{t('search.submenu.buy')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-sewa')} key="search-rent">
                <a href={`${OUTSIDE_HOST}/property-list?usage=rent&type=propertyAdvertisement`}>{t('search.submenu.rent')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-propertibaru')} key="search-new-property">
                <a href={`${OUTSIDE_HOST}/property-list?usage=sell,rent&type=projectAdvertisement`}>{t('search.submenu.new_property')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-agenproperti')} key="search-property-agent">
                <a href={`${OUTSIDE_HOST}/agent-list?usage=self&type=agentAdvertisement`}>{t('search.submenu.property_agent')}</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item icon={generatePictureElem('ico-semua')} key="search-all">
                <a href={`${OUTSIDE_HOST}/property-list?usage=sell,rent&type=propertyAdvertisement,projectAdvertisement`}>{t('search.submenu.find_all')}</a>
            </Menu.Item>
        </Menu>
    );

    const renderOtherNavigationSubMenu = (
        <Menu>
            <Menu.Item icon={generatePictureElem('ico-forum')} key="other-forum">
                <a href={`${OUTSIDE_HOST}/forum`}>{t('other.submenu.forum')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-blog')} key="other-blog">
                <a href={BLOG_URL} target="_blank" rel="noreferrer">{t('other.submenu.blog')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-tentangkami')} key="other-plan-and-pricing">
                <a href={`${OUTSIDE_HOST}/plan-and-pricing`}>{t('other.submenu.plan_and_pricing')}</a>
            </Menu.Item>
            <Menu.Item key="other-language">
                <button onClick={props.onLanguageSubMenuClicked}>
                    { `${props.currentLang} | ${t('other.submenu.change_language')}` }
                </button>
            </Menu.Item>
        </Menu>
    )

    const renderComproNavigationSubMenu = (
        <Menu>
            <Menu.Item icon={generatePictureElem('ico-tentangkami')} key="compro-about-us">
                <a href={`${OUTSIDE_HOST}/about-us`}>{t('compro.submenu.about_us')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-carakerja')} key="compro-hiw">
                <a href={`${OUTSIDE_HOST}/how-it-work`}>{t('compro.submenu.hiw')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-faq')} key="compro-faq">
                <a href={`${OUTSIDE_HOST}/faq`}>{t('compro.submenu.faq')}</a>
            </Menu.Item>
        </Menu>
    )

    const renderAdvertisementNavigationSubMenu = (
        <Menu>
            <Menu.Item icon={generatePictureElem('ico-ads-sell')} key="advertisements-sell">
                <a href={`${OUTSIDE_HOST}/create-property-advertisement/sell`}>{t('advertisement.submenu.sell')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-ads-rent')} key="advertisements-rent">
                <a href={`${OUTSIDE_HOST}/create-property-advertisement/rent`}>{t('advertisement.submenu.rent')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-ads-new')} key="advertisements-new-property">
                <a href={`${OUTSIDE_HOST}/create-project-advertisement`}>{t('advertisement.submenu.new_property')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-ads-pro')} key="advertisements-professional">
                <a href={`${OUTSIDE_HOST}/create-project-advertisement`}>{t('advertisement.submenu.professional')}</a>
            </Menu.Item>
        </Menu>
    )

    const renderMembershipAreaNavigationSubMenu = (
        <Menu>
            <Menu.Item icon={generatePictureElem('memberarea')} key="member-member-area">
                <a href={`${OUTSIDE_HOST}/member-area`}>{t('member.submenu.member_area')}</a>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('ico-blog')} key="member-professional-area">
                <Link to="/professional/area">{t('member.submenu.professional_area')}</Link>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('suggestion')} key="member-suggestion">
                <button>{t('member.submenu.suggestion')}</button>
            </Menu.Item>
            <Menu.Item icon={generatePictureElem('logout')} key="member-logout">
                <button>{t('member.submenu.logout')}</button>
            </Menu.Item>
        </Menu>
    )

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

    const renderMembershipAreaButton = () => {
        if (!props.isAlreadyLogin){
            return null;
        }else {
            return (
                <Dropdown overlay={renderMembershipAreaNavigationSubMenu} placement="bottomLeft">
                    <Button shape="circle" icon={<UserOutlined />} css={style.navProfileButton}/>
                </Dropdown>
            )
        }
    }

    return (
        <div css={style.base}>
            <div css={style.logoWrapper}>
                <a href={`${OUTSIDE_HOST}`}>
                    <picture>
                        <source srcSet={shareImages['logo.webp']} type="image/webp"/>
                        <img src={shareImages['logo.png']} alt="Logo"/>
                    </picture>
                </a>
            </div>
            <div css={style.navigationWrapper}>
                <Dropdown overlay={renderSearchNavigationSubMenu} placement="bottomLeft">
                    <div>
                        {t('search.trigger')} <CaretDownOutlined />
                    </div>
                </Dropdown>
                <div className="single-menu">
                    <a href={`${OUTSIDE_HOST}/in-progress`}>{t('investment.trigger')}</a>
                </div>
                <div className="single-menu">
                    <Link to="/professional">{t('professional.trigger')}</Link>
                </div>
                <Dropdown overlay={renderOtherNavigationSubMenu} placement="bottomLeft">
                    <div>
                        {t('other.trigger')} <CaretDownOutlined />
                    </div>
                </Dropdown>
                <Dropdown overlay={renderComproNavigationSubMenu} placement="bottomLeft">
                    <div>
                        {t('compro.trigger')} <CaretDownOutlined />
                    </div>
                </Dropdown>
                <Dropdown overlay={renderAdvertisementNavigationSubMenu} placement="bottomLeft">
                    <Button css={style.advertiseButton}>
                        {t('advertisement.trigger')} <CaretDownOutlined />
                    </Button>
                </Dropdown>
                {renderLoginButton()}
                {renderMembershipAreaButton()}
            </div>
        </div>
    )
}

export default NavbarView;
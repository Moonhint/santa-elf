/** @jsxImportSource @emotion/react */
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    ProjectOutlined,
    ShopOutlined,
    ShoppingOutlined
  } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import style from './style';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

interface menuSelectedPropsType {
    key: string,
}
type PropsType = {
    collapsed: boolean;
    selectedMenu: string[];
    onCollapse: (collapsed:boolean) => void;
    onMenuSelected: (props:menuSelectedPropsType) => void;
    url: string;
    children?: React.ReactNode;
};
const SidebarView = (props:PropsType) => {

    const [ t ] = useTranslation('sidebar');
    
    return (
        <Layout css={style.base}>
            <Sider theme="light" collapsible collapsed={props.collapsed} onCollapse={props.onCollapse}>
                <Menu css={style.menu} selectedKeys={props.selectedMenu} mode="inline" onSelect={props.onMenuSelected}>
                    <Menu.Item key="membership" icon={<DesktopOutlined />}>
                        <Link to={`${props.url}/membership`}>{t('menu.membership')}</Link>
                    </Menu.Item>
                    <Menu.Item key="professional-detail" icon={<ShopOutlined />}>
                        <Link to={`${props.url}/professional-detail`}>{t('menu.business_detail')}</Link>
                    </Menu.Item>
                    <SubMenu key="service" icon={<ProjectOutlined />} title={t('menu.service')}>
                        <Menu.Item key="create-service">
                            <Link to={`${props.url}/create-service`}>{t('menu.new_service')}</Link>
                        </Menu.Item>
                        <Menu.Item key="services">
                            <Link to={`${props.url}/services`}>{t('menu.service_list')}</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="orders" icon={<ShoppingOutlined />}>
                        <Link to={`${props.url}/orders`}>{t('menu.order')}</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content css={style.content}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {props.children}
                    </div>
                </Content>
            </Layout>
      </Layout>
    )
}

export default SidebarView;
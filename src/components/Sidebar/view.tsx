/** @jsxImportSource @emotion/react */
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    ProjectOutlined,
    ShopOutlined,
    ShoppingOutlined
  } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import style from './style';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

type SidebarViewPropsType = {
    collapsed: boolean;
    onCollapse: (collapsed:boolean) => void;
}

const SidebarView = (props:SidebarViewPropsType) => {

    const [ t ] = useTranslation('sidebar');
    
    return (
        <Layout css={style.base}>
            <Sider theme="light" collapsible collapsed={props.collapsed} onCollapse={props.onCollapse}>
                <Menu css={style.menu} defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="membership" icon={<DesktopOutlined />}>
                        {t('menu.membership')}
                    </Menu.Item>
                    <Menu.Item key="business-detail" icon={<ShopOutlined />}>
                        {t('menu.business_detail')}
                    </Menu.Item>
                    <SubMenu key="service" icon={<ProjectOutlined />} title={t('menu.service')}>
                        <Menu.Item key="new_service">{t('menu.new_service')}</Menu.Item>
                        <Menu.Item key="service_list">{t('menu.service_list')}</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="order" icon={<ShoppingOutlined />}>
                        {t('menu.order')}
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content css={style.content}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Content
                    {props.collapsed}
                    </div>
                </Content>
            </Layout>
      </Layout>
    )
}

export default SidebarView;
/** @jsxImportSource @emotion/react */
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { Typography, Tabs} from 'antd';
import style from './style';
import ShopStatus from './components/ShopStatus';
import ServiceList from './components/ServiceList';
import { useListCounterContext } from './contexts/listCounter';

const { Title } = Typography;
const { TabPane } = Tabs;

interface PropsType {

}

const ProfessionalServiceListView = (props:PropsType) => {
    const { allListCount, activeListCount, nonActiveListCount } = useListCounterContext();
    const { t } = useTranslation(LOCALE_KEY);
    return (
        <div css={style.base}>
            <Title className="title" level={3}>{t('title')}</Title>
            <ShopStatus/>
            <Tabs size="large" defaultActiveKey="all">
                <TabPane tab={t('tab_headers.all') + ` (${allListCount})`} key="all">
                    <ServiceList />
                </TabPane>
                <TabPane tab={t('tab_headers.active') + ` (${activeListCount})`} key="active">
                    <ServiceList state="ACTIVE"/>
                </TabPane>
                <TabPane tab={t('tab_headers.non_active') + ` (${nonActiveListCount})`} key="non_active">
                    <ServiceList state="NON_ACTIVE" />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default ProfessionalServiceListView;
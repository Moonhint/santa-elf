import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { ProfessionType } from '@/apis/useProfession';
import { ProfessionalType } from '@/apis/useProfessional';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface ProfessionalListViewPropsType {
    professions: [ProfessionType] | never[],
    isLoadingDataProfessions: boolean,
    professionals: [ProfessionalType] | never[],
    isLoadingDataProfessionals: boolean,
    tabChanged: (e:string) => void,
}

const ProfessionalListView = (props:ProfessionalListViewPropsType) => {
    const { t } = useTranslation(LOCALE_KEY);
    return (
        <div>
            <Tabs defaultActiveKey="1" onChange={props.tabChanged}>
                <TabPane tab={t('tab.service')} key="service">
                    service
                    <pre>
                        {props.isLoadingDataProfessions ? 'true' : 'false'}
                    </pre>
                    <pre>
                        {JSON.stringify(props.professions)}
                    </pre>
                </TabPane>
                <TabPane tab={t('tab.professional')} key="professional">
                    <pre>
                        {props.isLoadingDataProfessionals ? 'true' : 'false'}
                    </pre>
                    <pre>
                        {JSON.stringify(props.professionals)}
                    </pre>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default ProfessionalListView;
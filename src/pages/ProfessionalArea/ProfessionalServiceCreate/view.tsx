/** @jsxImportSource @emotion/react */
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { ProfessionalServiceType } from '@/apis/lib/service';
import style from './style';
import { Typography} from 'antd';
import ProfessionalServiceForm from '../components/ProfessionalServiceForm'; 


const { Title } = Typography;

interface PropsType {
    onSubmit: (payload: ProfessionalServiceType) => void;
}
const ProfessionalServiceCreateView = (props:PropsType) => {
    const { t } = useTranslation(LOCALE_KEY);
    return (
        <div css={style.base}>
            <div css={style.title}>
                <Title level={3}>{t('title')}</Title>
            </div>
            <ProfessionalServiceForm onSubmit={props.onSubmit} />
        </div>
    )
}

export default ProfessionalServiceCreateView;
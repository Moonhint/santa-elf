/** @jsxImportSource @emotion/react */
// import { LOCALE_KEY } from './const';
// import { useTranslation } from 'react-i18next';
// import { Button } from 'antd';
import ServiceListItem from '../ServiceListItem';
import style from './style';
import { ProfessionalServiceType } from '@apis/lib/service';

interface PropsType {
    services: ProfessionalServiceType[];
}

const ProfessionalServiceListView = (props:PropsType) => {
    const { services } = props;
    // const { t } = useTranslation(LOCALE_KEY);
    return (
        <div css={style.base}>
            {services.map(service => <ServiceListItem service={service} />)}
        </div>
    )
}

export default ProfessionalServiceListView;
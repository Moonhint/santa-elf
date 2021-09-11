/** @jsxImportSource @emotion/react */
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { ProfessionalServiceType } from '@/apis/lib/service';
// import ServiceListItem from '../ServiceListItem';
import style from './style';

interface PropsType {
    services: ProfessionalServiceType[] | never[];
}

const ServiceListView = (props:PropsType) => {
    const { t } = useTranslation(LOCALE_KEY);
    return (
        <div css={style.base}>
            {/* {props.services.map(service => <ServiceListItem service={service}/>)} */}
            <Button>{t('view')}</Button>
        </div>
    )
}

export default ServiceListView;
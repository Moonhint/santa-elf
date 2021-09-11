/** @jsxImportSource @emotion/react */
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import style from './style';

interface PropsType {
    name: string;
    coverImageUrl: string;
    viewCount: number;
    finishedCount: number;
    priceStr: string;
    active: boolean;
    adminChecking: boolean;
    editUrl: string;
}

const ServiceListItemPageView = (props:PropsType) => {
    const { t } = useTranslation(LOCALE_KEY);
    return (
        <div css={style.base}>
            <Button>{t('view')}</Button>
        </div>
    )
}

export default ServiceListItemPageView;
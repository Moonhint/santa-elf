/** @jsxImportSource @emotion/react */
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import style from './style';

interface PropsType {
    title: string;
}

const ProfessionalServiceEditPageView = (props:PropsType) => {
    const { t } = useTranslation(LOCALE_KEY);
    return (
        <div css={style.base}>
            {props.title}
            <Button>{t('view')}</Button>
        </div>
    )
}

export default ProfessionalServiceEditPageView;
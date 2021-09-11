/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
// import { Title } from 'antd';
import style from './style';

interface PropsType {
    children?: ReactNode;
    title: string;
    description?: string;
    required?: boolean;
}
const InputWrapperView = (props:PropsType) => {
    const { children, title, description, required } = props;
    const { t } = useTranslation(LOCALE_KEY);

    const renderRequired = () => {
        if (!required){
            return null;
        }else { 
            return <span className="required">{t('required')}</span>;
        }
    };

    const renderTitle = () => {
        const cTitle = description ? 'title' : 'title-no-desc';
        return <span className={cTitle}>{title}</span>;
    }

    const renderDescription = () => {
        if (!description){
            return null;
        }else {
            return (
                <div css={style.desc}>
                    {description}
                </div>
            );
        }
    }

    return (
        <div css={style.base}>
            <div css={style.header}>
                {renderTitle()}
                {renderRequired()}
            </div>
            {renderDescription()}
            <div css={style.childrenSpace}>
                {children}
            </div>
        </div>
    )
}

export default InputWrapperView;
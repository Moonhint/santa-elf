/** @jsxImportSource @emotion/react */
import { LOCALE_KEY, ICON_STYLE } from './const';
import { useTranslation } from 'react-i18next';
import { Button, Switch } from 'antd';
import style from './style';
import { EyeFilled, ShoppingOutlined } from '@ant-design/icons';


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

    const onChange = (value:boolean) => {
        console.log(value);
    }

    return (
        <div css={style.base}>
            <div className="right-side">
                <div css={style.imageContainer}>
                    <img src={props.coverImageUrl} alt="" />
                </div>
                <div css={style.infoContainer}>
                    <p css={style.title}>{props.name}</p>
                    <div css={style.countContainer}>
                        <div css={style.infoIcon}>
                            <EyeFilled style={ICON_STYLE}/>
                            <span className="value">{props.viewCount}</span>
                        </div>
                        <div css={style.infoIcon}>
                            <ShoppingOutlined style={ICON_STYLE}/>
                            <span className="value">{props.finishedCount}</span>
                        </div>
                    </div>
                    <p css={style.title}>
                        Rp. {props.priceStr}
                    </p>
                </div>
            </div>
            <div className="left-side">
                <Switch defaultChecked onChange={onChange} />
                <Button type="primary" size="large">{t('edit')}</Button>
            </div>
        </div>
    )
}

export default ServiceListItemPageView;
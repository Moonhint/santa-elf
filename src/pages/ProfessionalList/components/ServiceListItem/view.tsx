/** @jsxImportSource @emotion/react */
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { Button, Avatar } from 'antd';
import { HeartOutlined, StarFilled } from '@ant-design/icons';
import { ProfessionalServiceType } from '@apis/lib/service';
import currency from '@shared/helpers/currency';
import style from './style';

interface PropsType {
    service: ProfessionalServiceType;
}

const ServiceListItemView = (props:PropsType) => {
    const { service } = props;
    const { t } = useTranslation(LOCALE_KEY);
    const { imageUrls, name, addressProvince, addressCity, price, ratingAverage } = service;
    const imageUrlsJSON = JSON.parse(String(imageUrls));
    return (
        <div css={style.base}>
            <div css={style.imgContainer}>
                <img src={imageUrlsJSON[0].url}/>
            </div>
            <div css={style.bodyContainer}>
                <div className="name-heart-container">
                    {/* <p className="name">{name}</p> */}
                    <p className="name">Jasa Service AC Bersih Sekali</p>
                    <HeartOutlined />
                </div>
                <p className="address">{addressProvince}, {addressCity}</p>
                <p className="price">Rp. {currency(price, 'splitter')}</p>
                <div className="rating-container">
                    <StarFilled style={{ color:"#FBC140" }} />
                    <p>{ratingAverage}/<span className="rating-end">5</span></p>
                </div>
            </div>
            <div>
                <Avatar/>
            </div>
            <pre>{JSON.stringify(service)}</pre>
            <Button>{t('view')}</Button>
        </div>
    )
}

export default ServiceListItemView;
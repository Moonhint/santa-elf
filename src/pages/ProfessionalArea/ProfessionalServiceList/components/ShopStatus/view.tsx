/** @jsxImportSource @emotion/react */
import { LOCALE_KEY } from './const';
import { useTranslation } from 'react-i18next';
import { Switch, Typography } from 'antd';
import style from './style';
import ilusPng from './imgs/ilus.png';
import ilusWebp from './imgs/ilus.webp';

const { Title, Text } = Typography;

interface PropsType {
    isOffDay: boolean;
    onDayOffToggled: (toggleValue:boolean) => void;
}
const ShopStatusView = (props:PropsType) => {
    const { t } = useTranslation(LOCALE_KEY);

    const renderDescription = () => {
        if (props.isOffDay){
            return (
                <div>
                    <Title level={5}>{t('onDay.title')}</Title>
                    <Text>{t('onDay.description')}</Text>
                </div>
            );
        }else{
            return (
                <div>
                    <Title level={5}>{t('offDay.title')}</Title>
                    <Text>{t('offDay.description')}</Text>
                </div>
            );
        }
    }

    const renderStateName = () => {
        if (props.isOffDay){
            return <Text className="state-name">{t('onDay.state')}</Text>;
        }else{
            return <Text className="state-name">{t('offDay.state')}</Text>;
        }
    }

    return (
        <div css={style.base}>
            <div css={style.ilus}>
                <picture>
                    <source srcSet={ilusWebp} type="image/webp"/>
                    <img src={ilusPng} alt="Logo"/>
                </picture>
            </div>
            <div css={style.desc}>
                {renderDescription()}
                <div css={style.stateControll}>
                    {renderStateName()}
                    <Switch checked={props.isOffDay} onChange={props.onDayOffToggled} />
                </div>
            </div>

        </div>
    )
}

export default ShopStatusView;

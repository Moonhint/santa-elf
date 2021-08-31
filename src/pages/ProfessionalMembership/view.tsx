/** @jsxImportSource @emotion/react */
import style from './style';
import { Button, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { ActiveProfessionalType } from '@/apis/useProfessionalMembership';
import { isMobile } from 'react-device-detect';
import formatDate from '@/shared/helpers/date-formater';

interface PropsType {
    activeProfessionalMembership: ActiveProfessionalType | undefined;
    isLoadingActiveProfessionalMembership: boolean;
    noActiveMembership: boolean;
}
const ProfessionalMembershipView = (props: PropsType) => {
    const [ t ] = useTranslation('professional-membership');

    const DATE_FORMAT = 'short-month';

    const renderMembershipType = () => {
        if (props.noActiveMembership){
            return <span> {t('no_membership')} </span>;
        }else{
            return <span css={style.textBold}> {props.activeProfessionalMembership?.Membership.name} </span>;
        }
    }

    const renderValidUntilDate = () => {
        if (props.noActiveMembership){
            return null;
        }else{
            const expiredAt = props.activeProfessionalMembership?.expiredAt || '';
            return <p css={style.textSoft}>{t('valid_until')} {formatDate(expiredAt, DATE_FORMAT)}</p>
        }
    }

    const renderJoinSince = () => {
        if (props.noActiveMembership){
            return null;
        }else {
            const createdAt = props.activeProfessionalMembership?.createdAt || '';
            return <p css={style.textSoft}>{t('join_since')} {formatDate(createdAt, DATE_FORMAT)}</p>;
        }
    }

    const renderOnDataLoad = () => {
        if (props.isLoadingActiveProfessionalMembership){
            return (
                <Spin />
            );
        }else{
            if (isMobile){
                return (
                    <div css={style.mobileContent}>
                        <p className="title">{t('type')}:</p>
                        <p className="membership-type">{renderMembershipType()}</p>
                        {renderValidUntilDate()}
                        <Button type="primary" size="large">{t('buy_membership')}</Button>
                        <span className="join-date">{renderJoinSince()}</span>
                    </div>
                )
            }else{
                return (
                    <>
                        <div className="left-side">
                            <p>{t('type')}: <b>{renderMembershipType()}</b></p>
                            {renderValidUntilDate()}
                        </div>
                        <div className="right-side">
                            {renderJoinSince()}
                            <Button type="primary" size="large">{t('buy_membership')}</Button>
                        </div>
                    </>
                )
            }
        }
    };

    return (
        <div css={style.base}>
            <h1>
                {t('title')}
            </h1>
            <div css={style.panel}>
                {renderOnDataLoad()}
            </div>
            <div css={style.footer}>
                <Button size="middle">{t('make_verify')}</Button>
            </div>
        </div>
    )
}

export default ProfessionalMembershipView;
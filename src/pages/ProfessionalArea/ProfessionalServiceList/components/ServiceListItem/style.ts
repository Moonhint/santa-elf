import { css } from '@emotion/react';

const base = css`
    border-bottom: 2px solid #E8EAEF;
    display: flex;
    justify-content: space-between;
    padding: 32px 0;

    .right-side {
        display: flex;
        justify-content: flex-start;
    }

    .left-side {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const imageContainer = css`
    img {
        width: 140px;
        height: 140px;
        border-radius: 8px;
    }
`;

const infoContainer = css`
    margin-left: 21px;
`;

const title = css`
    font-size: 16px;
    font-weight: 500;
`;

const infoIcon = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 24px;
    .value {
        margin-left: 12px;
    }
`;

const countContainer = css`
    display: flex;
    justify-content: flex-start;
    margin-top: 22px;
    margin-bottom: 28px;
`;

const styles = {
    base,
    imageContainer,
    infoContainer,
    title,
    infoIcon,
    countContainer,
}
  
export default styles;
  
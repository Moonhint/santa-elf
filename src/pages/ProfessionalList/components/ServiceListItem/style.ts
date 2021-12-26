import { css } from '@emotion/react';

const base = css`
    width: 300px;
    height: 320px;
    border-radius: 8px;
    border: 1px solid black;
`;

const imgContainer = css`
    width: 100%;
    height: 160px;
    img {
        width: 100%;
        height: 100%;
    }
`;

const bodyContainer = css`
    text-align: left;
    margin: 12px;

    .name-heart-container {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .name {
        font-size: 14px;
        color: #42454D;
        margin-bottom: 4px;
    }
    .address {
        color: #A1A9B2;
        font-size: 11px;
    }
    .price {
        font-size: 14px;
        color: #000;
        font-weight: 600;
    }
    .rating-container {
        display: flex;
        font-size: 11px;
        font-weight: 600;
    }
    .rating-container .rating-end {
        font-size: 10px;
    }
`;

const styles = {
    base,
    imgContainer,
    bodyContainer,
}
  
export default styles;
  
import { css } from '@emotion/react';

const base = css`
    border: 1px solid #ECEDEE;
    border-radius: 8px;
    padding 30px;
    margin-bottom: 24px;
`;

const header = css`
    display: flex;
    justify-content: space-between;
    margin: 0 42px;

    .title {
        font-size: 18px;
        transform: translateY(-14px);
    }
    .title-no-desc {
        font-size: 18px;
        margin: 42px 0;
    }
    .required {
        font-size: 11px;
        color: #FF0000;
        margin-top: 4px;
        margin-right: 42px;
    }
`;

const desc = css`
    margin: 12px 42px 32px 42px;
    text-align: left;
    font-size: 12px;
`;

const childrenSpace = css`
    padding-bottom: 24px;
`;

const styles = {
    base,
    header,
    desc,
    childrenSpace,
}
  
export default styles;
  
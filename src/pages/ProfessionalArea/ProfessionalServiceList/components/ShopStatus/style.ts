import { css } from '@emotion/react';

const base = css`
    border: 2px solid #ECEDEE;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 24px;
`;

const ilus = css`
    img {
        height: 120px;
    }
`;

const desc = css`
    text-align: left;
    padding-left: 24px;
`;

const stateControll = css`
    margin-top: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    .state-name {
        margin-right: 8px;
        font-weight: 600;
    }
`;

const styles = {
    base,
    ilus,
    desc,
    stateControll,
}
  
export default styles;
  
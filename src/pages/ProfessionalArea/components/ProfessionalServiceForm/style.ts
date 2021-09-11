import { css } from '@emotion/react';

const base = css`
    
`;

const imageUploader = css`
    display: flex;
    justify-content: center;
`;

const cta = css`
    text-align: right;
    margin-right: 72px;
    margin-top: 42px;
    margin-bottom: 42px;
`;

const form = css`
    margin: 0 42px;
    .ant-form-item-explain-error {
        text-align: left;
    }
`;

const numberInput = css`
    width: 100%;
`

const guaranteeContainer = css`
    display: flex;

    .guarantee-checkbox {
        text-align: left;
    }
`

const label = css`
    margin-top: 38px;
    .title {
        font-size: 14px;
        font-weight: 600;
    }
    .subtitle {
        font-size: 12px;
        color: #A1A9B2;
    }
`

const required = css`
    color: #FF0000;
    font-size: 11px;
    text-align: right;
    margin-bottom: 4px;
`

const styles = {
    base,
    imageUploader,
    form,
    numberInput,
    guaranteeContainer,
    label,
    required,
    cta,
}
  
export default styles;
  
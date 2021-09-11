import { css } from '@emotion/react';

const base = css`
    display: flex;
    justify-content: flex-start;
`;

const mainUploader = css`
    padding-right: 10px;
    position: relative; /* required  for demo*/

    .ant-upload-select-picture-card {
        background-color: #f4faff;
    }

    .ribbon {
        font-size: 8px;
        margin: 0;
        padding: 0;
        background: #4589DC;
        color:white;
        padding: 2px 4px;
        margin-right: 18px;
        position: absolute;
        top:0;
        right:0;
        transform-origin: top left;
    }
    .ribbon:before,
    .ribbon:after {
        content: '';
        position: absolute;
        top:0;
        margin: 0 -1px; /* tweak */
        background: #4589DC;
    }
    .ribbon:before {
        right:100%;
    }

    .ribbon:after {
        left:100%;
    }
`;

const uploader = css`
    padding: 0 10px;
    .ant-upload-select-picture-card {
        background-color: #f4faff;
    }
`;

const styles = {
    base,
    mainUploader,
    uploader,
}
  
export default styles;
  
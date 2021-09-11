import { css } from '@emotion/react';
import { isMobile } from 'react-device-detect';

const base = css`
  h1 {
    text-align: left;
    margin: 8px 0;
  }
  @media only screen and (max-width: 420px) {
    h1 {
      padding: 12px;
    }
  }
`

let panelDisplay = css`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`

if (isMobile){
  panelDisplay = css`
    display: block;
    padding: 12px;
    text-align: left;

    p {
      margin: 0;
    }
  `
}

const panel = css`
  background-color: #f9f9fb;
  box-shadow: 0 5px 11px #e8eaef;
  min-height: 120px;
  ${panelDisplay}

  .left-side {
    text-align: left;
  }
  .right-side {
    position: relative;
  }
  .right-side button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

const footer = css`
  text-align: left;
  margin-top: 24px;

  @media only screen and (max-width: 425px) {
    margin-left: 12px;
    margin-right: 12px;
    button {
      width: 100%;
    }
  }
`

const textSoft = css`
  color: #81868f;
  font-size: 12px;

  @media only screen and (max-width: 420px) {
    font-size: 11px;
  }
`

const textBold = css`
  color: #42454d;
  font-size: 18px;
  margin-left: 6px;
`

const mobileContent = css`
  .title {
    font-size: 12px;
  }
  .membership-type {
    margin: 6px 0;
  }
  .membership-type span {
    font-size: 14px;
    font-weight: 500;
    margin: 6px 0;
  }
  button {
    width: 100%;
    margin-top: 16px;
    margin-bottom: 6px;
  }
  .join-date {
    text-align: center;
  }
`

const styles = {
  base,
  panel,
  footer,
  textSoft,
  textBold,
  mobileContent,
}

export default styles;

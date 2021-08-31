import { css } from '@emotion/react';

const base = css`
  min-height: 100vh;
`
const menu = css`
  padding-top: 8px;
  height: 100%;
`
const content = css`
  background-color: #FFF;

  @media only screen and (max-width: 420px) {
    .site-layout-background {
      padding: 0 !important;
    }
  }
`

const styles = {
  base,
  menu,
  content,
}

export default styles;

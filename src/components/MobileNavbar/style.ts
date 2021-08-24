import { css } from '@emotion/react';

const base = css`
  background: #f1f2f5;
  padding: 0 24px;
  height: 56px;
  width: 100%;
  border-bottom: #DDD 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const containerLogo = css`
  img {
    width: 140px;
    height: 27px;
  }
`

const styles = {
  base,
  containerLogo,
}

export default styles;

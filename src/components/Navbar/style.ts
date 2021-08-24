import color from '@shared/styles/color';
import spacing from '@shared/styles/spacing';
import { css } from '@emotion/react';

const base = css`
  color: ${color.mako};
  background-color: ${color.white};
  padding: 0 ${spacing.sideSpace};
  height: 64px;
  border-bottom: 1px solid ${color.alto};
  display: flex;
  justify-content: space-between;
`

const logoWrapper = css`
  padding: 15px 0;
  img {
    width: 140px;
    height: 30px;
  }
`

const navigationWrapper = css`
  font-size: 13px;
  padding: 24px 0;
  font-weight: 500;
  display: flex;
  .ant-dropdown-trigger {
    margin-left: 16px;
  }
  .single-menu {
    margin-left: 16px;
  }
  .single-menu a {
    color: ${color.mako};
  }
`

const navPicIcon = css`
  img {
    width: 18px;
    height: 18px;
  }
`

const navWithButton = css`
  border-radius: 5px;
  margin-top: -7px;
  margin-left: 16px;
`

const advertiseButton = css`
  ${navWithButton}
  border: 1px solid #4589dc;
  color: #4589dc;
`

const navProfileButton = css`
  margin-top: -7px;
  margin-left: 16px;
`

const styles = {
  base,
  logoWrapper,
  navigationWrapper,
  navPicIcon,
  navWithButton,
  advertiseButton,
  navProfileButton
}

export default styles;

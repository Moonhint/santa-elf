/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from '@shared/imgs/logo.png';

const base = css`
  color: hotpink;
`

type NavbarViewPropsType = {
    onClicko: () => void;
    numb: number
}

const NavbarView = (props:NavbarViewPropsType) => {
    return (
        <div css={css`
            ${base};
            background-color: #eee;
        `} onClick={props.onClicko}>
            <img src={logo} alt=""/>
            Navbar {props.numb}
        </div>
    )
}

export default NavbarView;
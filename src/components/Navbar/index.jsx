import Menu from './../Menu'
import Logo from '../../assets/logo.png'

import * as s from './styles.jsx'

export default function Navbar() {
    return (
        <s.Nav>
            <s.Img id='Logo' src={Logo}></s.Img>
            <Menu></Menu>
        </s.Nav>
    )
};
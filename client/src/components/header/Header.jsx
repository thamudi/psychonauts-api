import React, { Component } from 'react';
import logo from './assets/psychonauts-logo.png';
import api from './assets/api.png';

import './Header.css';

export class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <img src={logo} alt="" />
                    <img src={api} alt="" />
                </header>
            </>
        )
    }
}

export default Header

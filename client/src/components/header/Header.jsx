import React, { Component } from 'react'
import './Header.css';
import logo from './assets/psychonauts-logo.png'

export class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <img src={logo} alt="" />
                </header>
            </>
        )
    }
}

export default Header

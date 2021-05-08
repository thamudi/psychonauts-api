import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import comingSoon from './assets/coming-soon.png';

export class Construction extends Component {
    render() {
        return (
            <div className="content-wrapper txt-center">
                <Header />
                <img src={comingSoon} alt="" />
                <Footer />
            </div>
        )
    }
}

export default Construction

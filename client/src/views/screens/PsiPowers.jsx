import React, { Component } from 'react'
import Header from '../../components/header/Header';
import Content from '../../components/page-content/Content';
import Footer from '../../components/footer/Footer';

export class PsiPowers extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default PsiPowers

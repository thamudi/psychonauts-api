import React, { Component } from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
export class Index extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default Index

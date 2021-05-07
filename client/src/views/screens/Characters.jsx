import React, { Component } from 'react'
import Header from '../../components/header/Header';
import Content from '../../components/page-content/Content';
import Footer from '../../components/footer/Footer';

export class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "content": {
                "title": "Characters",
                "desc": "An endpoint responsible for everything related to the characters of Psychonauts",
                "endpoint": `${process.env.REACT_APP_SERVER_API}/characters`,
                "searchQueries": [
                    ["limit", 5],
                    ["psiPower", "telekinesis"],
                    ["gender", "male"],
                    ["name", "razputin"],
                ]
            }
        }
    }
    render() {
        return (
            <div className="content-wrapper">
                <Header />
                <Content
                    title={this.state.content.title}
                    desc={this.state.content.desc}
                    endpoint={this.state.content.endpoint}
                    searchQueries={this.state.content.searchQueries}
                />
                <Footer />
            </div>
        )
    }
}

export default Characters

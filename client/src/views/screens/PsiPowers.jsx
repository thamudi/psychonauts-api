import React, { Component } from 'react'
import Header from '../../components/header/Header';
import Content from '../../components/page-content/Content';
import Footer from '../../components/footer/Footer';

export class PsiPowers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "content": {
                "title": "PSI Powers",
                "desc": "An endpoint responsible for everything related to PSI Powers in Psychonauts",
                "endpoint": `${process.env.REACT_APP_SERVER_API}/powers`,
                "searchQueries": [
                    ["limit", 5, "Limit the number of Psi Powers you get back from the API", "Nothing to see Here"],
                    ["name", "telekinesis", "Get the Psi Power by their unique name", "Nothing to see Here"],
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

export default PsiPowers

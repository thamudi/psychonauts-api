import React, { Component } from 'react'
import Accordion from '../accordion/Accordion';
import './Table.css';

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "serverApi": process.env.REACT_APP_SERVER_API,
            "sections": [
                {
                    "title": "Get Characters",
                    "body": "An endpoint to get all the characters within this API",
                    "link": "characters",
                    "endpoint": `${process.env.REACT_APP_SERVER_API}/characters`
                },
                {
                    "title": "Get a single character",
                    "body": "An endpoint to get a character by their name within this API",
                    "link": "characters",
                    "endpoint": `${process.env.REACT_APP_SERVER_API}/characters/raz`
                },
                {
                    "title": "Get PSI-Powers",
                    "body": "An endpoint to get all the PSI-Powers within this API",
                    "link": "psi-powers",
                    "endpoint": `${process.env.REACT_APP_SERVER_API}/psi-powers`
                },
                {
                    "title": "Get a single PSI-Powers",
                    "body": "An endpoint to get a PSI-Power by its name within this API",
                    "link": "psi-powers",
                    "endpoint": `${process.env.REACT_APP_SERVER_API}/psi-powers/psi-punch`
                },

            ]
        }
    }
    render() {
        return (
            <div className="table">
                {this.state.sections.map((section, idx) => {
                    return (
                        <div key={idx} className="accordion-section">
                            <Accordion
                                title={section.title}
                                body={section.body}
                                link={section.link}
                                endpoint={section.endpoint}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Table

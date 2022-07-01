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
                    "linkText": "characters",
                    "linkAnchor": "characters",
                    "endpoint": `${process.env.REACT_APP_SERVER_API}/api/characters`
                },
                {
                    "title": "Get a single character",
                    "body": "An endpoint to get a character by their name within this API",
                    "linkText": "characters",
                    "linkAnchor": "characters#name",
                    "endpoint": `${process.env.REACT_APP_SERVER_API}/api/characters?name=razputin`
                },
                {
                    "title": "Get PSI-Powers",
                    "body": "An endpoint to get all the PSI-Powers within this API",
                    "linkText": "psi-powers",
                    "linkAnchor": "psi-powers",
                    "endpoint": `${process.env.REACT_APP_SERVER_API}/api/psi-powers`
                },
                {
                    "title": "Get a single PSI-Powers",
                    "body": "An endpoint to get a PSI-Power by its name within this API",
                    "linkText": "psi-powers",
                    "linkAnchor": "psi-powers#name",
                    "endpoint": `${process.env.REACT_APP_SERVER_API}/api/powers?name=psi-punch`
                },

            ]
        }
    }
    render() {
        return (
            <div className="box">
                {this.state.sections.map((section, idx) => {
                    return (
                        <div key={idx} className="accordion-section">
                            <Accordion
                                title={section.title}
                                body={section.body}
                                linkText={section.linkText}
                                linkAnchor={section.linkAnchor}
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

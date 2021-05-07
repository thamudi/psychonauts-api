import React, { Component } from 'react'
import Accordion from '../accordion/Accordion';
import './Table.css';

export class Table extends Component {
    render() {
        return (
            <div className="card">
                <Accordion
                    title="Section 1"
                    body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <Accordion
                    title="Section 1"
                    body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </div>
        )
    }
}

export default Table

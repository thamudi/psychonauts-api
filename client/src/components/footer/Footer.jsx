import React, { Component } from 'react'
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer>
                <p>Authored by:
                    <a rel="noreferrer" target="_blank" href="https://github.com/thamudi"> thamudi</a>
                </p>
                <p>Repo
                    <a target="_blank" href="https://github.com/thamudi/psychonauts-api" rel="noreferrer"> Link</a>
                </p>
            </footer>
        )
    }
}

export default Footer

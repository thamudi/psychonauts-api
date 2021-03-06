import React, { Component } from 'react'
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer>
                <p>Authored by:
                    <a rel="noreferrer" target="_blank" href="https://github.com/thamudi"> thamudi</a>
                </p>
                <p>Contact me on Twitter:
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/thamudi93">@thamudi93</a>
                </p>
                <p>Repo
                    <a target="_blank" href="https://github.com/thamudi/psychonauts-api" rel="noreferrer"> Link</a>
                </p>
            </footer>
        )
    }
}

export default Footer

import React, { Component } from 'react';
import './Accordion.css';

export class Accordion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    toggle = (e) => {
        this.setState({ active: !this.state.active });
        const panel = e.target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    render() {
        return (
            <>
                <button onClick={this.toggle} className={`accordion ${this.state.active ? "active" : ""}`}>{this.props.title}</button>
                <div className="panel">
                    <p>{this.props.body}</p>
                </div>

            </>
        )
    }
}

export default Accordion

import React, { Component } from 'react'
import Toast from '../toast/Toast';

import './Content.css';

export class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: this.props.searchQueries,
            showToast: false,
            currentSection: '',
        }
    };

    update = (e) => {
        const target = e.target.nextElementSibling.value;
        const temp = this.state.options;
        this.state.options.forEach((element, idx) => {
            if (element[0] === target) {
                temp[idx][1] = e.target.value;
            }
        });
        this.setState({
            options: temp
        });
    };

    submitRequest = (e) => {
        e.preventDefault();
    }

    copyToClipBoard = (e) => {
        const query = e.target.id;
        const value = this.state.options.filter(item => item[0] === query)[0][1];
        let url = `${this.props.endpoint}?${query.toLowerCase()}=${value}`;
        navigator.clipboard.writeText(url);
        this.toggleToast(query);
        setTimeout(() => {
            this.toggleToast('');
        }, 4000);
    };

    toggleToast = (sectionId) => {
        this.setState({ showToast: !this.state.showToast, currentSection: sectionId });
    };

    render() {
        return (
            <div>
                <h2>
                    {this.props.title}
                </h2>

                <p>
                    {this.props.desc}
                </p>

                <p>
                    <code>
                        {this.props.endpoint}
                    </code>
                </p>
                <p>
                    Click on the title to copy the url
                </p>
                {this.state.options.map((item, idx) => {
                    return (
                        <div key={idx}>
                            <h3 onClick={this.copyToClipBoard} id={item[0]}>{item[0]} &#x1F587;</h3>
                            <p>
                                {item[2]}
                            </p>
                            <>
                                {this.state.showToast && this.state.currentSection === item[0] &&
                                    <Toast
                                        msg="Copied to clipboard"
                                    />
                                }
                            </>
                            <form>
                                <label htmlFor="{item[0]}">{this.props.endpoint}?{item[0].toLowerCase()}=</label>
                                <input onChange={this.update} type="text" value={item[1]} />
                                <input type="hidden" value={item[0]} />
                                <input type="hidden" value={`${this.props.endpoint}?${item[0].toLowerCase()}=${item[1]}`} />
                                <input type="submit" value="submit" />
                            </form>
                            <div className="jsonViewer box">
                                {item[3]}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Content

/*TODO
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
1 - fix the setState when changes are made within the input field
2 - send a bulk promise on page load
3 - send each request individually without having to reflect all the changes on
    the other requests
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
 */
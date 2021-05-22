import React, { Component } from 'react'
import Toast from '../toast/Toast';
import axios from 'axios';

import './Content.css';

export class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            queryOptions: this.props.searchQueries,
            showToast: false,
            currentSection: '',
            limit: '',
            gender: '',
            name: ''
        }
    };

    update = (e) => {
        const target = e.target.nextElementSibling.value;
        const temp = this.state.queryOptions;
        this.state.queryOptions.forEach((element, idx) => {
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
        const value = this.state.queryOptions.filter(item => item[0] === query)[0][1];
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


    getNewResponse = async (e) => {
        e.preventDefault();
        const url = e.target.url.value;
        const query = [e.target.searchQuery.value];
        await this.fetchAndSet(url, query);
    }

    componentDidMount = async () => {
        const endpoint = this.props.endpoint;
        const queryOptions = this.state.queryOptions;
        for (let index = 0; index < queryOptions.length; index++) {
            const query = queryOptions[index];
            const url = `${endpoint}?${query[0]}=${query[1]}`;
            await this.fetchAndSet(url, query);
        }
    }

    fetchAndSet = async (url, query) => {
        const axiosRes = await axios.get(url);
        const info = JSON.stringify(axiosRes.data, null, 2);

        switch (query[0]) {
            case 'limit':
                this.setState({
                    limit: info
                });
                break;
            case 'gender':
                this.setState({
                    gender: info
                });
                break;
            case 'name':
                this.setState({
                    name: info
                });
                break;

            default:
                break;
        }
    }


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
                {this.state.queryOptions.map((item, idx) => {
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
                            <form onSubmit={this.getNewResponse}>
                                <label htmlFor="{item[0]}">{this.props.endpoint}?{item[0].toLowerCase()}=</label>
                                <input onChange={this.update} type="text" value={item[1]} />
                                <input type="hidden" name="searchQuery" value={item[0]} />
                                <input type="hidden" name="url" value={`${this.props.endpoint}?${item[0].toLowerCase()}=${item[1]}`} />
                                <input type="submit" value="submit" />
                            </form>
                            <div className="jsonViewer box">
                                <code>
                                    <pre>
                                        {
                                            this.state[item[0]] ? this.state[item[0]] : item[3]
                                        }
                                    </pre>
                                </code>
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
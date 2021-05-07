import React, { Component } from 'react'

export class Content extends Component {
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
                {this.props.searchQueries.map((item, idx) => {
                    return (
                        <div key={idx} id={`#${item[0]}`}>
                            <h3>{item[0]}</h3>
                            <form>
                                <label htmlFor="{item[0]}">{this.props.endpoint}</label>
                                <input type="text" value={item[1]} />
                                <input type="submit" value="submit" />
                            </form>
                            <p>
                                <code>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti commodi ipsa magni dicta a dolorum vero non, libero culpa explicabo officiis suscipit assumenda delectus. Accusamus inventore debitis at architecto.</code>
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Content

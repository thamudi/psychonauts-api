import React, { Component } from 'react';
import Table from '../table-content/Table';
import text from './assets/text.png';

export class Main extends Component {
    render() {
        return (
            <>
                <main>
                    <section className="txt-center">
                        <img src={text} alt="" />
                    </section>
                    <section>
                        <Table />
                    </section>
                </main>
            </>
        )
    }
}

export default Main

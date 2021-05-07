import React, { Component } from 'react';
import Table from '../table-content/Table';
import './Main.css';

export class Main extends Component {
    render() {
        return (
            <>
                <main>
                    <section>
                        <article>
                            <p>
                                An API tribute to the cult classic game Psychonauts
                            </p>
                        </article>
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

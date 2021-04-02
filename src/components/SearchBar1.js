import React, { Component } from 'react'

export class SearchBar1 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Gopher Search part1</h1>
                <form>
                    <input
                        type="text"
                    />
                </form>
                <table style={{margin: 'auto'}}>
                    <thead>
                        <tr><th>name</th><th>email</th><th>website</th><th>image</th></tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        )
    }
}

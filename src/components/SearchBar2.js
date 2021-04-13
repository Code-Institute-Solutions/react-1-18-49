import React, { Component } from 'react'
import { names } from '../names'

export class SearchBar2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Name Search part2</h1>
                <form>
                    <input
                        type="text"
                        placeholder="search names..."
                    />
                </form>
                <div style={{margin: 'auto'}}>
                    {
                        names.map(name => {
                            return (
                                <p>{name}</p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             names: importedNames
        }
    }
    
    render() {
        return (
            <div>
                <h1>Name Search</h1>
                <p>matching names found: {this.state.names.length}</p>
                <form>
                    <input
                        type="text"
                        placeholder="search names..."
                    />
                </form>
                <div style={{margin: 'auto'}}>
                    {this.state.names.map(name => {
                        return <p key={name}>{name}</p>
                    })}
                </div>
            </div>
        )
    }
}

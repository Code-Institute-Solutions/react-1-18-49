import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: importedNames
        }
    }
    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        const filteredNames = importedNames.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
    }
    render() {
        return (
            <div>
                <h1>Name Search part3</h1>
                <p>matching names found: {this.state.names.length}</p>
                <form>
                    <input
                        type="text"
                        placeholder="search names..."
                        onChange={(e) => this.handleChange(e)}
                    />
                </form>
                <div style={{margin: 'auto'}}>
                    {
                        this.state.names.map(name => <p>{name}</p>)
                    }
                </div>
            </div>
        )
    }
}

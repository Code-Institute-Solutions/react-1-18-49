import React, { Component } from 'react'
import { names } from '../names'

export class SearchBar3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: names
        }
    }
    handleChange = (event) => {
        const inputText = event.target.value
        const filteredNames = names.filter(name => {
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
                <form>
                    <input
                        type="text"
                        placeholder="search names..."
                        onChange={(e) => this.handleChange(e)}
                    />
                </form>
                <div style={{margin: 'auto'}}>
                    {
                        this.state.names.map(name => {
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

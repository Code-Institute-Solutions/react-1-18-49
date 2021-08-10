import React, { Component } from 'react'

export class SearchBar1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>Name Search</h1>
                <form>
                    <input
                        type="text"
                        placeholder="search names..."
                    />
                </form>
                <div style={{margin: 'auto'}}>
                    we will render names here
                </div>
            </div>
        )
    }
}

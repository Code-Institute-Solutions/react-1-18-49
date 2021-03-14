import React, { Component } from 'react'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            greeting: 'Hello!'
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.greeting}</h1>
            </div>
        )
    }
}

export default LifeCyclesCDU

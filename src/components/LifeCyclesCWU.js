import React, { Component } from 'react'
import LifeCyclesCWUTracker from './LifeCyclesCWUTracker'

export class LifeCyclesCWU extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
        }
    }

    toggleDisplay = () => {
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    render() {
        return (
            <div>
                {this.state.visible && <LifeCyclesCWUTracker />}
                <button>Toggle Display</button>
            </div>
        )
    }
}

export default LifeCyclesCWU
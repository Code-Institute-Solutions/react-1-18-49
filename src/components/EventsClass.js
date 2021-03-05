import React from "react";

class EventsClass extends React.Component {
    clickHandler() {
        console.log('Clicked the class button');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>
                    Click me - class component
                </button>
            </div>
        )
    }
}

export default EventsClass;
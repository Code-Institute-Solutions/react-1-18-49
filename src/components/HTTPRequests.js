import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                posts: response.data
            })
        })
    }
    render() {
        return (
            <div>
                <h2>Posts:</h2>
                {JSON.stringify(this.state.posts)}
            </div>
        )
    }
}

export default HTTPRequests

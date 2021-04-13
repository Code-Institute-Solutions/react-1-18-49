import React, { Component } from 'react'
import {posts} from '../loremPicsum.json'

export class SearchBar3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: posts
        }
    }
    handleChange = (event) => {
        const name = event.target.value
        const filteredPosts = posts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        console.log(filteredPosts)
        this.setState({
            posts: filteredPosts
        })
    }
    render() {
        return (
            <div>
                <h1>Post Search 3</h1>
                <form>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="text"
                    />
                </form>
                <table style={{margin: 'auto'}}>
                    <thead>
                        <tr><th>title</th><th>description</th><th>name</th><th>image</th></tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map(post => {
                                const {title, description, name, image} = post;
                                return (
                                    <tr key={title}>
                                        <td>{title}</td>
                                        <td>{description}</td>
                                        <td>{name}</td>
                                        <td><img alt={name} src={image} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

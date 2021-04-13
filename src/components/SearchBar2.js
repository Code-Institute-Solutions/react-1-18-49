import React, { Component } from 'react'
import {posts} from '../loremPicsum'

export class SearchBar2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Post Search part2</h1>
                <form>
                    <input
                        type="text"
                    />
                </form>
                <table style={{margin: 'auto'}}>
                    <thead>
                        <tr><th>title</th><th>description</th><th>name</th><th>image</th></tr>
                    </thead>
                    <tbody>
                        {
                            posts.map(post => {
                                const {title, description, name, image} = post;
                                return (
                                    <tr key={image}>
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

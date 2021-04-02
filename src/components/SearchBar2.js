import React, { Component } from 'react'
import { gopherCards } from '../gophers'

export class SearchBar2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Gopher Search part2</h1>
                <form>
                    <input
                        type="text"
                    />
                </form>
                <table style={{margin: 'auto'}}>
                    <thead>
                        <tr><th>name</th><th>email</th><th>website</th><th>image</th></tr>
                    </thead>
                    <tbody>
                        {
                            gopherCards.map(item => {
                                const {name, email, website, image} = item;
                                return (
                                    <tr key={image}>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{website}</td>
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

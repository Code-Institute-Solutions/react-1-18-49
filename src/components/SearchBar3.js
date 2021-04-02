import React, { Component } from 'react'
import { gopherCards } from '../gophers'

export class SearchBar3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gophers: gopherCards
        }
    }
    handleChange = (event) => {
        const name = event.target.value
        const filteredGophers = gopherCards.filter(card => {
            return card.name.toLowerCase().includes(name)
        })
        this.setState({
            gophers: filteredGophers
        })
    }
    render() {
        return (
            <div>
                <h1>Gopher Search 3</h1>
                <form>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="text"
                    />
                </form>
                <table style={{margin: 'auto'}}>
                    <thead>
                        <tr><th>name</th><th>email</th><th>website</th><th>image</th></tr>
                    </thead>
                    <tbody>
                        {
                            this.state.gophers.map(item => {
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

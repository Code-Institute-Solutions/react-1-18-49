import React, { Component } from 'react'
import { gopherCards } from '../gophers'
import Loader from './Loader'

export class SearchBar4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            gophers: []
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
                gophers: gopherCards
            })
        }, 2000)
    }
    handleChange = (event) => {
        const name = event.target.value
        const filteredGophers = gopherCards.filter(card => {
            return card.name.toLowerCase().includes(name)
            // return Object.values(card).some(item => item.toLowerCase().includes(input))
        })
        this.setState({
            gophers: filteredGophers
        })
    }
    render() {
        return (
            <div>
                <h1>Gopher Search</h1>
                <form>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="text"
                    />
                </form>
                {
                    this.state.isLoading
                    ? <Loader />
                    : <table style={{margin: 'auto'}}>
                        <thead>
                            <tr><th>name</th><th>email</th><th>website</th><th>image</th></tr>
                        </thead>
                        <tbody>
                            {
                                this.state.isLoading
                                ? <Loader />
                                : this.state.gophers.map(item => {
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
                }
            </div>
        )
    }
}

import React, { Component } from 'react'
import { gopherCards } from '../gophers'
import Loader from './Loader'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            searches: 0,
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
    componentDidUpdate(prevProps, prevState) {
        if (prevState.gophers.length !== this.state.gophers.length){
            this.setState(previousState => ({searches: previousState.searches + 1}))
        }
    }
    handleChange = (event) => {
        const input = event.target.value
        const filteredGophers = gopherCards.filter(card => {
            return Object.values(card).some(item => item.toLowerCase().includes(input))
        })
        this.setState({
            gophers: filteredGophers
        })
    }
    render() {
        return (
            <div>
                <h1>Gopher Search</h1>
                so far searched {this.state.searches} times
                <form>
                    <input onChange={(e) => this.handleChange(e)} type="text" />
                </form>
                {
                    this.state.isLoading
                    ? <Loader />
                    : (<table style={{margin: 'auto'}}>
                            <thead>
                                <tr><th>name</th><th>email</th><th>website</th><th>image</th></tr>
                            </thead>
                            {
                                <tbody>
                                    {
                                        this.state.gophers.map(item => {
                                            const {name, email, website, image} = item;
                                            return (
                                                <tr key={image}>
                                                    <td>{name}</td>
                                                    <td>{email}</td>
                                                    <td>{website}</td>
                                                    <td><img src={image} /></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            }
                        </table>
                    )
                }
            </div>
        )
    }
}

export default SearchBar

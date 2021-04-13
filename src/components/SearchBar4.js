import React, { Component } from 'react'
import {posts} from '../loremPicsum.json'
import Loader from './Loader'

export class SearchBar4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: posts,
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
                posts: posts
            })
        }, 2000)
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
                <h1>Post Search 4</h1>
                <form>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="text"
                    />
                </form>
                {
                    this.state.isLoading ?
                    <Loader /> :
                    (<table style={{margin: 'auto'}}>
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
                    </table>)
                }
            </div>
        )
    }
}








// export class SearchBar4 extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isLoading: true,
//             gophers: []
//         }
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false,
//                 gophers: gopherCards
//             })
//         }, 2000)
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Gopher Search</h1>
//                 <form>
//                     <input
//                         onChange={(e) => this.handleChange(e)}
//                         type="text"
//                     />
//                 </form>
//                 {
//                     this.state.isLoading
//                     ? <Loader />
//                     : <table style={{margin: 'auto'}}>
//                         <thead>
//                             <tr><th>name</th><th>email</th><th>website</th><th>image</th></tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 this.state.isLoading
//                                 ? <Loader />
//                                 : this.state.posts.map(item => {
//                                     const {name, email, website, image} = item;
//                                     return (
//                                         <tr key={image}>
//                                             <td>{name}</td>
//                                             <td>{email}</td>
//                                             <td>{website}</td>
//                                             <td><img alt={name} src={image} /></td>
//                                         </tr>
//                                     )
//                                 })
//                             }
//                         </tbody>
//                     </table>
//                 }
//             </div>
//         )
//     }
// }

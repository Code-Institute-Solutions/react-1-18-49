const faker = require('faker')
const axios = require('axios')
const {writeFile} = require('fs')

const createPosts = async () => {
    let allPosts = []
    for (let i = 0; i < 33; i++){
        const { name, posts } = faker.helpers.createCard()
        const userPosts = posts.map(post => ({...post, name}))
        allPosts = [...allPosts, ...userPosts]
    }
    const images = await Promise.all(
        allPosts.map(post => axios.get('https://picsum.photos/300/200'))
    )

    allPosts = allPosts.map(
        (post, idx) => ({
            ...post, image: `${images[idx].request.host}${images[idx].request.path}`
        })
    )
    console.log(allPosts.length)
    
    writeFile('./loremPicsum.js', JSON.stringify({allPosts}), (err) => {
        err ? console.log('whoopsie!') : console.log('all good!')
    })
}

// createPosts()
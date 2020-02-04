const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express:server,
    autoescape: false
})

server.get("/", (req, res) => {
    
    const about = { 
        avatarURL: "https://avatars3.githubusercontent.com/u/51240229?s=400&v=4",
        name: "Marcos Del Valle",
        role: "Desenvolvedor FullStack",
        description: "Desenvolvedor Fullstack com foco em desenvolvimento de aplicações nativas.",
        links : [
            { name: "Github", url: "https://github.com/mansodelvalle"},
            { name: "Twitter", url: "https://twitter.com/faladelvalle"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/marcosvdelvalle"}
        ]
    }
    return res.render('about', {about})
})

server.get("/courses", (req, res) => {
    return res.render('courses', { items: videos} )
})

server.use((req, res) => {
    res.status(404).render('not-found')
})

server.listen(3333, () => {
    console.log('Server is running')
})
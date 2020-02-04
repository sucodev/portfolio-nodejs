const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

// Usando uma função do express ( static ) que faz com que os meus arquivos estáticos que estão presentes dentro da pasta public sejam interpretados
server.use(express.static('public'))

// nesta função estou falando que todas as rotas serao 
// interpretadas pelo arquivo render 
server.set('view engine', 'njk')

// Todos os arquivos da views seja lidos pela interpretação
nunjucks.configure('views', {
    express:server
})

// Criação das rotas
server.get("/", (req, res) => {
    return res.render('about')
})
server.get("/courses", (req, res) => {
    return res.render('courses')
})
server.use((req, res) => {
    res.status(404).render('not-found')
})

//  Ele precisa ouvir a porta 3333 para rodar o servidor
server.listen(3333, () => {
    console.log('Server is running')
})
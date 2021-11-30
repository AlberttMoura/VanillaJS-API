const http = require('http')
require('dotenv/config')
const books = require('./data/books')

const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(books))
})



server.listen(PORT)
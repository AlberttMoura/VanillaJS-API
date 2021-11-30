const http = require('http')
require('dotenv/config')

const {getBooks, getBook} = require('./controllers/bookController')


const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    if(req.url == '/api/books' && req.method == 'GET') {
        getBooks(req, res)
    }
    else if (req.url.match(/\/api\/books\/([0-9]+)/) && req.method == 'GET') {
        const id = req.url.split('/')[3]
        getBook(req, res, id)
    }
    else {
        res.writeHead(404, {'Content-type': 'application/json'})
        res.end(JSON.stringify({message: 'Route Not Found'}))
    }
})


server.listen(PORT)
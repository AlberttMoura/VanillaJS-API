const http = require('http')
require('dotenv/config')

const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'Text-html')
    res.write('<h1>Hello World</h1>')
    res.end()
})



server.listen(PORT)
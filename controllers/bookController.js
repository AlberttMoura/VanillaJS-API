const Book = require('../models/bookModel')

async function getBooks(req, res) {
    try {
        const books = await Book.findAll()
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(books))  
    }
    catch(error) {

    }
}

module.exports = {
    getBooks
}
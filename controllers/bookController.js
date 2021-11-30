const Book = require('../models/bookModel')

async function getBooks(req, res) {
    try {
        const books = await Book.findAll()
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(books))  
    }
    catch(error) {
        console.log(error)
    }
}

async function getBook(req, res, id) {
    try {
        const book = await Book.findById(id)
        if(!book) {
            res.writeHead(404, {'Content-type': 'application/json'})
            res.end(JSON.stringify({message: 'Book not found'}))
        }
        else {
            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(JSON.stringify(book))
        }
    }
    catch(error) {
        console.log(error)
    }
}

module.exports = {
    getBooks,
    getBook
}
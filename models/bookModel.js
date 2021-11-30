const books = require('../data/books')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(books)
    })
}

module.exports = {
    findAll
}
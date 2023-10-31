const { Router } = require('express');
const controller = require('./controller.js');

const router = Router();

router.get('/books', controller.getBookList);

router.post('/books/addBooks', controller.addBooks);

router.get('/books/:id', controller.getBookById);

router.put('/books/update/:id', controller.updateBookById);

router.get('/books/delete/:id', controller.deleteBookById);

module.exports = router
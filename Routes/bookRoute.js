const express = require('express');
const router = express.Router();
const {getBooks,createBooks,getBook,deleteBook, editBook} = require('../bookController')


router.get('/',getBooks);
router.post('/',createBooks);
//To Obtain the particular Book by Id
router.get('/:id',getBook);
router.delete('/:id',deleteBook);
router.patch('/:id',editBook);

module.exports = router;
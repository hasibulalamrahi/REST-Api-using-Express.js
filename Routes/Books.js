const express = require('express');
const router = express.Router();
let Books = require('../Json File/Books.json')
const { v4: uuidv4 } = require('uuid')
const { writeDataToFile } = require('../readWrite')


let books = []

router.get('/',(req,res)=>{
    console.log(books);
    res.send(books)
});
router.post('/',(req,res)=>{
    const Book = req.body;
   
    const id =  uuidv4();
    const BookWithID = {id,...Book}
    books.push(BookWithID)
    // writeDataToFile('../Json File/Books.json', Books);
    res.send(`Book with ISBN ${Book.isbn} and Title ${Book.title} is added`)
})
//To Obtain the particular Book by Id
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const getBook = books.find((Book)=>Book.id ===id)
    res.send(getBook)
})
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    books = books.filter((Book)=>Book.id !==id)
    res.send(`Book with id ${id} is deleted from the database`)
})

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const findBook = books.find((Book)=>Book.id ===id)
    const {isbn,title,author,description,Reviews,price} = req.body;
    if(isbn){
        findBook.isbn = isbn ;
    }
    if(title){
        findBook.title = isbn ;
    }
    if(author){
        findBook.author = author ;
    }
    if(description){
        findBook.description = description ;
    }
    if(Reviews){
        findBook.Reviews = Reviews ;
    }
    if(price){
        findBook.price = price ;
    }
    res.send(`Book with id ${id} is Edited`)
})

module.exports = router;
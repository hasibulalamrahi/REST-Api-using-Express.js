// const bookRoute = require('./Routes/bookRoute.js')
// const Books = require('./bookModel.js')
const { v4: uuidv4 } = require('uuid')

let books = []

const  getBooks = ((req,res)=>{
    // try {
    //     const allBooks = Books.findAll()

    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.send(JSON.stringify(allBooks))
    // } catch (error) {
    //     console.log(error)
    // }
    res.send(books);
});
const createBooks = ((req,res)=>{
    
        const Book = req.body;
       
        const id =  uuidv4();
        const BookWithID = {id,...Book}
        books.push(BookWithID)
        // writeDataToFile('../Json File/Books.json', Books);
        res.send(`Book with ISBN ${Book.isbn} and Title ${Book.title} is added`)
    
})

const getBook = ((req,res)=>{
    const {id} = req.params;
    const getBook = books.find((Book)=>Book.id ===id)
    res.send(getBook)
})
const deleteBook =((req,res)=>{
    const {id} = req.params;
    books = books.filter((Book)=>Book.id !==id)
    res.send(`Book with id ${id} is deleted from the database`)
})
const editBook = ((req,res)=>{
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
module.exports = {
    getBooks,
    createBooks,
    getBook,
    deleteBook,
    editBook
}
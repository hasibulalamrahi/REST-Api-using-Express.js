const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const booksRoute = require('./Routes/bookRoute')
const PORT = 5000;
app.use(bodyParser.json())

app.use('/books',booksRoute)

app.get('/',(req,res)=>{
    console.log('TEST');
    res.send('This')
})


app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
})
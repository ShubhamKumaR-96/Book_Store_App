const express = require("express");
const Book = require("./book.model");
const { postBook, getAllBooks, getSingleBook, updateBook, deleteBook } = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();


// Flow => frontend => backend server => controller => book schema => database => 
// send data to server => back to the frontend 

// post a book
router.post("/create-book", verifyAdminToken, postBook)

// get all the books
router.get('/',getAllBooks);

// get single book
router.get('/:id',getSingleBook)

// update book
router.put('/edit/:id',verifyAdminToken,updateBook)

// delete book
router.delete('/:id',verifyAdminToken,deleteBook)

module.exports=router

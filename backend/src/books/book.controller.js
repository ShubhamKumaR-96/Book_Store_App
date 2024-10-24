const Book = require("./book.model");

const postBook=async(req,res)=>{
    try {
      const newBook=await Book({...req.body});
      await newBook.save();
      res.status(201).json({ message: 'Book created successfully!', book: newBook });
    }  catch (error) {
      console.error("Error creating book:", error);
      res.status(500).json({ message: "Failed to create book", error: error.message });
    }
}

const getAllBooks=async(req,res)=>{
    try {
        const books=await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching book:", error);
      res.status(500).json({ message: "Failed to fetch book", error: error.message });
    }
}

const getSingleBook=async(req,res)=>{
    try {
        const {id}=req.params;
        const book=await Book.findById(id);
        if(!book){
            res.status(404).json({ message: " book not found", error: error.message });
        }
        res.status(200).json(book);
    } catch (error) {
        console.error("Error fetching book:", error);
      res.status(500).json({ message: "Failed to fetch book", error: error.message });
    }
}

const updateBook=async(req,res)=>{
    try {
        const {id}=req.params;
        const updatedBook=await Book.findByIdAndUpdate(id,req.body,{new:true})
        if(!updatedBook){
            res.status(404).json({ message: " book not found", error: error.message });
        }
        res.status(200).json({
            msg : "Book Updated succesfully",
            book:updatedBook
        });
    } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).json({ message: "Failed to fetch book", error: error.message });
    }
}

const deleteBook=async(req,res)=>{
    try {
        const {id}=req.params;
        const deletedBook=await Book.findByIdAndDelete(id)
        if(!deletedBook){
            res.status(404).json({ message: " book not found", error: error.message });
        }
        res.status(200).json({
            msg : "Book Deleted succesfully",
            book:deletedBook
        });
    } catch (error) {
        console.error("book not found:", error);
        res.status(500).json({ message: "Failed to fetch book", error: error.message });
    }
}

module.exports={
    postBook,getAllBooks,getSingleBook,updateBook,deleteBook
}
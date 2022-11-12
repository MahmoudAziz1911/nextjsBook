import Book from "../api-helpers/model/Book";

export const getAllBooks = async(req, res) => {
    let books;

    try {
        books = await Book.find();
    } catch (error) {
        return new Error(error)
    }

    if(!books) {
        return res.status(500).json({message: "internal server error"})
    }

    if(books.length === 0) {
        return res.status(404).json({message: "No Books Founded"})
    }

    return res.status(200).json({books})
    
}

export const AddBook = async(req, res) => {
    const {title, author, price, imageUrl, featured} = req.body;

    if(
        !title || title.trim() === "",
        !author || author.trim() === "",
        !price,
        !imageUrl || imageUrl.trim() === ""
    ) {
        return res.status(422).json({message: "invalid Inputs !!"})
    }

    let book;
    try {
        book = new Book({title, author, price, imageUrl, featured});
        book = await book.save();
    } catch (error) {
        return new Error(error);
    }

    if(!book) {
        return res.status(500).json({message: "internal server Error"})
    }
    return res.status(201).json({book})
}

export const updateBook = async(req, res) => {
    const id = req.query.id;
    const {title, author, price, imageUrl, featured} = req.body;

    if(
        !title || title.trim() === "",
        !author || author.trim() === "",
        !price,
        !imageUrl || imageUrl.trim() === ""
    ) {
        return res.status(422).json({message: "invalid Inputs !!"})
    }

    let book;
    try {
        book = await Book.findByIdAndUpdate(id, 
            {title, author, price, imageUrl, featured
        });
        
    } catch (error) {
        return new Error(error);
    }

    if(!book) {
        return res.status(500).json({message: "internal server Error"})
    }
    return res.status(200).json({message: "successfully updated !!"})
}

export const deleteBook = async(req, res) => {
    const id = req.query.id;

    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (error) {
        return new Error(error);
    }

    if(!book) {
        return res.status(500).json({message: "unable To Delete"})
    }
    return res.status(200).json({message: "successfully deleted !!"})
}

export const getBookFromId = async(req, res) => {
    const id = req.query.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (error) {
        return new Error(error)
    }

    if(!book) {
        return res.status(404).json({ message: "No Book Founded"});
    }

    return res.status(200).json({book})
    
}
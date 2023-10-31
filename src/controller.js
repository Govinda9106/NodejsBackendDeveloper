import Book from "../model/book.js";

async function getBookById(req, res, next) {
    try {
        const bookId = req.params.id;
        const getBook = await Book.findById({ _id: bookId }, { __v: 0 });
        if (getBook == null) {
            return res.json({ status: 404, message: "Book Details Not Found!" })
        }
        res.send(getBook);
    } catch (error) {
        next(error);
    }
};

async function getBookList(req, res, next) {
    try {
        const getBookList = await Book.find({}, { __v: 0 });
        res.send(getBookList);
    } catch (error) {
        next(error);
    }
};

async function addBooks(req, res, next) {
    try {
        const bookDetails = await Book.find({});
        const boolean = await checkAlreadyExist(req, res, bookDetails);
        console.log(boolean);
        if (boolean) {
            return res.json({ message: "Book Already Exist!!" })
        }
        const book = new Book(req.body);
        await book.save();
        res.json({ status: 201, message: "Book Added!" })
    } catch (error) {
        next(error)
    }
};

async function updateBookById(req, res, next) {
    try {
        const updates = Object.keys(req.body);
        const book = await Book.findById({ _id: req.params.id }, { __v: 0 });
        if (book == null) {
            return res.json({ status: 404, message: "Book Not Found!" });
        }
        updates.forEach(updates => book[updates] = req.body[updates]);
        await book.save();
        res.json({ detail: book, message: "Book Updated!" });
    } catch (error) {
        next(error)
    }
};

async function deleteBookById(req, res, next) {
    try {
        const bookDetails = await Book.findById({ _id: req.params.id });
        console.log(bookDetails);
        if (bookDetails == null) {
            return res.json({ status: 200, message: "Book Already Deleted" });
        }
        await Book.findByIdAndDelete({ _id: req.params.id });
        res.json({ status: 200, message: "Book Deleted!" })
    } catch (error) {
        next(error)
    }
};

async function checkAlreadyExist(req, res, bookDetails) {
    const bookArr = bookDetails.filter((books) => {
        return (books.title == req.body.title && books.author == req.body.author && books.summary == req.body.summary)
    });
    if (bookArr.length != 0) return true;
    return false;
};


export default {
    getBookList,
    addBooks,
    getBookById,
    deleteBookById,
    updateBookById
}
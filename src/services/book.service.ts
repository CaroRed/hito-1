import { Book } from "../models/book.model";

const getAll = async () => {
    const books = await Book.findAll();
    return books;
};

const getBookById = async (id: number) => {
    const user = await Book.findOneById(id);
    return user;
};

const createBook = async (isbn: string, name: string, pages: number) => {
    const book = await Book.findOneByIsbn(isbn);

    if (book) {
        throw new Error("book already exists");
    }

    const newBook = await Book.create(isbn, name, pages);

    return newBook;
}

const updateBook = async (id: number, name: string, pages: number) => {
    const book = await Book.update(id, name, pages);
    if (!book) throw new Error("book not found");
    return book;
}

const deleteBook = async (id: number) => {
    const book = await Book.findOneById(id);
    if (!book) throw new Error("book not found");

    const deleteBook = await Book.deleteBook(id);
    return deleteBook;
}

export const bookService = {
    getAll,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}
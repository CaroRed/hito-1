import { Book } from "../models/book.model";

const getAll = async () => {
    const books = await Book.findAll();
    return books;
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

export const bookService = {
    getAll,
    createBook,
    updateBook
}
import { Request, Response } from "express";
import { bookService } from "../services/book.service";

const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await bookService.getAll();
        res.json({
            books,
        });
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else res.status(500).json({ error: "Error de servidor" });
    }
};


const createBook = async (req: Request, res: Response) => {
    try {
        const { isbn, name, pages } = req.body;
        const newBook = await bookService.createBook(
            isbn,
            name,
            pages
        );
        res.json(newBook);
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else res.status(500).json({ error: "Error de servidor" });
    }
};

const updateBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, pages } = req.body;
        const book = await bookService.updateBook(parseInt(id), name, pages);
        res.json(book);
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else res.status(500).json({ error: "Error de servidor" });
    }
};

export const bookController = {
    getBooks,
    createBook,
    updateBook
}
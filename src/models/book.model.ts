import { pool } from "../config/database";
import { Book as IBook } from "../interfaces/book.interface";

const create = async (isbn: string, name: string, pages: number) => {
    const query = "INSERT INTO books values ($1, $2, $3, NOW()) RETURNING *"
    const values = [isbn, name, pages]
    const { rows } = await pool.query(query, values)
    return rows[0] as IBook;
}

const findAll = async () => {
    const query = {
        text: "SELECT * FROM books",
    };

    const { rows } = await pool.query(query);
    return rows as IBook[];
};

const findOneByIsbn = async (isbn: string) => {
    const query = {
        text: "SELECT * FROM books WHERE isbn = $1",
        values: [isbn],
    };

    const { rows } = await pool.query(query);
    return rows[0] as IBook;
};

//update
const update = async (isbn: string, name: string, pages: number) => {
    const query = "UPDATE books SET name = $1, pages = $2 WHERE isbn = $3 RETURNING *";

    const values = [name, pages, isbn];

    const { rows } = await pool.query(query, values);
    return rows[0] as IBook;
};


//delete

export const Book = {
    create,
    findAll,
    findOneByIsbn,
    update
}
import { pool } from "../config/database";
import { User } from "../interfaces/user.interface";

const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM USERS");
  return rows as User[];
};

const findOneById = async (id: number) => {
  const query = {
    text: `
    SELECT * FROM USERS
    WHERE id = $1
    `,
    values: [id],
  };

  const { rows } = await pool.query(query);

  return rows[0] as User;
};

const findOneByEmail = async (email: string) => {
  const query = {
    text: `
    SELECT * FROM USERS
    WHERE email = $1
    `,
    values: [email],
  };

  const { rows } = await pool.query(query);

  return rows[0] as User;
};

const create = async (email: string, password: string) => {
  const query = {
    text: `
    INSERT INTO USERS (email, password)
    VALUES ($1, $2)
    RETURNING *
    `,
    values: [email, password],
  };

  const { rows } = await pool.query(query);

  return rows[0] as User;
};

export const UserModel = {
  create,
  findOneById,
  findOneByEmail,
  findAll,
};
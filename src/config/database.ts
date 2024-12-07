import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;

//console.log(`Connecting to database on host: ${host}, user: ${user}`);

export const pool = new Pool({
    host: host,
    user: user,
    password: password,
    database: database,
    allowExitOnIdle: true
})
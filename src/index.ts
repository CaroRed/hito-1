import "dotenv/config";
import express from 'express';
import { pool } from "./config/database";
import userRoute from './routes/user.route';
import authRoute from './routes/auth.route';
import bookRoute from "./routes/book.route";

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/books", bookRoute);

(async () => {
  try {
    const { rows } = await pool.query("SELECT NOW()");
    console.log(`DB connecting: ${rows[0].now}`);
    app.listen(port, () => {
      console.log("Servidor andando en el puerto: " + port);
    });
  } catch (error) {
    console.log(error);
  }
})();
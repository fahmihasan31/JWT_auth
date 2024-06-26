import express from 'express';
import db from './config/Database.js';
// import Users from './models/UserModel.js';
import router from "./routes/userRoute.js";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser"
import cors from "cors";
dotenv.config();
const app = express();
const port = 8000;

try {
  await db.authenticate();
  console.log('Database Connected...');
  // await Users.sync();
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(cookieParser())
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server Running At Port ${port}`));
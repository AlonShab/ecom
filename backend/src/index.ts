import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from './config/db';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

const router = express.Router();

router.get("/api/title", (req, res) => {
    res.status(200).json({ title: 'server says hello'});
})

app.use(router);
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log("Server running on port!!", PORT);
})
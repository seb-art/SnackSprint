import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => { console.log("connected to database") })
    .catch((error) => {
        console.log("There was a problem connecting to the database", error)
    })

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "hello world" });
})


app.listen(7000, () => {
    console.log("server started on localhost:7000");
});

import dotenv from 'dotenv';
dotenv.config();

import { app, server } from "./socket/socket.js";
import express from "express";
import { connectDB } from "./db/connection1.db.js";
import cookieParser from "cookie-parser";
import cors from "cors";



connectDB();




//const app = express();




app.use(express.json()); // PURSE JSON DATA IN REQUEST BODY
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);




const PORT = process.env.PORT || 5000;



// routes

import userRoutes from './routes/user.route.js';
import messageRoute from './routes/message.route.js';

app.use('/api/v1/message', messageRoute);
app.use('/api/v1/user', userRoutes);



// middlwares
import { errorMiddleware } from './middlewares/error.middlware.js';
app.use(errorMiddleware);






app.get('/', (req, res) => {
    res.send('Hello, World!');
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
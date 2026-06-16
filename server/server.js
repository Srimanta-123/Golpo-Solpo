import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDB } from './db/connection1.db.js';

connectDB();

const app = express();

app.use(express.json()); // PURSE JSON DATA IN REQUEST BODY

const PORT = process.env.PORT || 5000;



// routes

import userRoutes from './routes/user.route.js';
app.use('/api/v1/users', userRoutes);

// middlwares
import { errorMiddleware } from './middlewares/error.middlware.js';
app.use(errorMiddleware);






app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
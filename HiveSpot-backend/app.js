import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import businessRouter from './routes/business.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


connectDB();

app.use(express.json());
app.use('/api/businesses', businessRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
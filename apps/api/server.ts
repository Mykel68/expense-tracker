import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/auth.route';

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', userRoutes);

app.listen(3000, () => {
    console.log(` Server is running on port ${PORT}`);
});

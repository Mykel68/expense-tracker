import express from 'express';
import userRoutes from './routes/auth.route';
const { PORT } = require('./config/env');


const app = express();
app.use(express.json());

app.use('/api/auth', userRoutes);

app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
});

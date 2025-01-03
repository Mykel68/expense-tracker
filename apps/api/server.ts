import express from 'express';
import userRoutes from './routes/auth.route';
import budgetRoutes from './routes/budget.route';
import expenseRoutes from './routes/expense.route';
import { sequelize, connectToDatabase } from './config/db';


const app = express();
const { PORT } = require('./config/env');

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/expenses', expenseRoutes);

// welcome api route
app.get('/', (req, res) => {
    res.send('Welcome to Expense Tracker API!');
});

// 404 Route
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

// Error Handling Middleware
app.use((error: any, req: any, res: any, next: any) => {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Connect to Database and Start Server
(async () => {
    try {
        await connectToDatabase();
        console.log('Database connected successful.');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    }
})();

// routes/expense.route.ts
import express from 'express';
import { verify_X_API_KEY } from '../middleware/auth';
import {
    getExpenses,
    addExpense,
    updateExpense,
    deleteExpense,
} from '../controllers/expense.controller';

const router = express.Router();

// Expense routes
router.get('/:userId', verify_X_API_KEY, getExpenses); // Get all expenses
router.post('/:userId', verify_X_API_KEY, addExpense); // Add a new expense
router.put('/:userId/:id', verify_X_API_KEY, updateExpense); // Update an expense
router.delete('/:userId/:id', verify_X_API_KEY, deleteExpense); // Delete an expense

export default router;

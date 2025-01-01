// controllers/expense.controller.ts
import { Request, Response } from 'express';
import Expense from '../model/Expense';
import { sendResponse } from '../utils/sendResponse';

// Get all expenses
export const getExpenses = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    try {
        const expenses = await Expense.findAll({
            where: { userId }, // Filter by userId
        });
        if (expenses.length === 0) {
            sendResponse(res, { statusCode: 404, message: 'No expenses found for this user.' });
            return;
        }
        sendResponse(res, { statusCode: 200, message: 'Expenses fetched successfully', data: expenses });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching expenses.', error });
    }
};

// Add a new expense
export const addExpense = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const { title, amount, date } = req.body;

    try {
        const expense = await Expense.create({
            title,
            amount,
            date,
            userId
        });

        sendResponse(res, { statusCode: 201, message: 'Expense added successfully', data: expense });
    } catch (error) {
        res.status(500).json({ message: 'Error adding expense.', error });
    }
};

// Update an expense by ID
export const updateExpense = async (req: Request, res: Response): Promise<void> => {
    const { id, userId } = req.params;
    const { title, amount, date } = req.body;

    try {
        const expense = await Expense.findOne({ where: { id, userId } });

        if (!expense) {
            sendResponse(res, { statusCode: 404, message: 'Expense not found.' });
            return;
        }

        expense.title = title || expense.title;
        expense.amount = amount || expense.amount;
        expense.date = date || expense.date;

        await expense.save();

        sendResponse(res, { statusCode: 200, message: 'Expense updated successfully.', data: expense });
    } catch (error) {
        res.status(500).json({ message: 'Error updating expense.', error });
    }
};

// Delete an expense by ID
export const deleteExpense = async (req: Request, res: Response): Promise<void> => {
    const { id, userId } = req.params;
    try {
        const expense = await Expense.findOne({ where: { id, userId } });

        if (!expense) {
            sendResponse(res, { statusCode: 404, message: 'Expense not found.' });
            return;
        }

        await expense.destroy();

        sendResponse(res, { statusCode: 200, message: 'Expense deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting expense.', error });
    }
};

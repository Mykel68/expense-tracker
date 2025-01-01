// controllers/expense.controller.ts
import { Request, Response } from 'express';
import Expense from '../model/Expense';
import { sendResponse } from '../utils/sendResponse';
import { RecurrenceInterval } from '../utils/enum';

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
    const { title, amount, date, isRecurring, recurrenceInterval, recurrenceEndDate } = req.body;
    if (isRecurring && !Object.values(RecurrenceInterval).includes(recurrenceInterval)) {
        res.status(400).json({ message: 'Invalid recurrence interval.' });
        return;
    }
    try {
        const expense = await Expense.create({
            title,
            amount,
            date,
            userId,
            isRecurring: isRecurring || false,
            recurrenceInterval: isRecurring ? recurrenceInterval : null,
            recurrenceEndDate: isRecurring ? recurrenceEndDate : null,
        });

        sendResponse(res, { statusCode: 201, message: 'Expense added successfully', data: expense });
    } catch (error) {
        res.status(500).json({ message: 'Error adding expense.', error });
    }
};

// Update an expense by ID
export const updateExpense = async (req: Request, res: Response): Promise<void> => {
    const { id, userId } = req.params;
    const { title, amount, date, isRecurring, recurrenceInterval, recurrenceEndDate } = req.body;


    try {
        const expense = await Expense.findOne({ where: { id, userId } });

        if (!expense) {
            sendResponse(res, { statusCode: 404, message: 'Expense not found.' });
            return;
        }

        // If updating to a recurring expense, validate required fields
        if (isRecurring) {
            if (!recurrenceInterval || !Object.values(RecurrenceInterval).includes(recurrenceInterval)) {
                res.status(400).json({ message: 'Invalid or missing recurrence interval.' });
                return;
            }

            if (!recurrenceEndDate) {
                res.status(400).json({ message: 'Recurrence end date is required for recurring expenses.' });
                return;
            }
        }

        // Update the fields
        expense.title = title || expense.title;
        expense.amount = amount || expense.amount;
        expense.date = date || expense.date;
        expense.isRecurring = isRecurring !== undefined ? isRecurring : expense.isRecurring;

        // Set recurrence fields if updating to recurring
        if (isRecurring) {
            expense.recurrenceInterval = recurrenceInterval;
            expense.recurrenceEndDate = recurrenceEndDate;
        } else {
            // Clear recurrence fields if switching to non-recurring
            expense.recurrenceInterval = null;
            expense.recurrenceEndDate = null;
        }

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

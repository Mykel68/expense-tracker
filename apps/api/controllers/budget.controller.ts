import { Request, Response } from 'express';
import Budget from '../model/Budget';
import { sendResponse } from '../utils/sendResponse';
import { checkMissingFields } from '../utils/validation';
import { errorHandler } from '../utils/error';

export const createBudget = async (req: Request, res: Response): Promise<void> => {
    const { userId, category, limit, startDate, endDate } = req.body;
    const requiredFields = ['userId', 'category', 'limit', 'startDate', 'endDate'];
    if (checkMissingFields(req, res, requiredFields))
        return;

    try {
        const newBudget = await Budget.create({ userId, category, limit, startDate, endDate });
        sendResponse(res, { statusCode: 201, message: 'Budget created successfully', data: newBudget });
    } catch (error) {
        console.error(error);
        const { statusCode, message } = errorHandler(error);
        sendResponse(res, { statusCode, message });
    }
};

export const getBudgets = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    try {
        const budgets = await Budget.findAll({ where: { userId } });
        sendResponse(res, { statusCode: 200, message: 'Budgets retrieved successfully', data: budgets });
    } catch (error) {
        console.error(error);
        const { statusCode, message } = errorHandler(error);
        sendResponse(res, { statusCode, message });
    }
};

export const updateBudget = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { category, limit, startDate, endDate } = req.body;

    try {
        const budget = await Budget.findByPk(id);
        if (!budget) {
            sendResponse(res, { statusCode: 404, message: 'Budget not found' });
            return;
        }

        await budget.update({ category, limit, startDate, endDate });
        sendResponse(res, { statusCode: 200, message: 'Budget updated successfully', data: budget });
    } catch (error) {
        console.error(error);
        const { statusCode, message } = errorHandler(error);
        sendResponse(res, { statusCode, message });
    }
};

export const deleteBudget = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const budget = await Budget.findByPk(id);
        if (!budget) {
            sendResponse(res, { statusCode: 404, message: 'Budget not found' });
            return;
        }

        await budget.destroy();
        sendResponse(res, { statusCode: 200, message: 'Budget deleted successfully' });
    } catch (error) {
        console.error(error);
        const { statusCode, message } = errorHandler(error);
        sendResponse(res, { statusCode, message });
    }
};

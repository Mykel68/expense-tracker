import { Request, Response } from 'express';
import { sendResponse } from '../utils/sendResponse';

export const checkMissingFields = (req: Request, res: Response, requiredFields: string[]): boolean => {
    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
        sendResponse(res, {
            statusCode: 400,
            message: `Missing required fields: ${missingFields.join(', ')}`,
        });
        return true;
    }

    return false;
};

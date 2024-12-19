import { Response } from 'express';

interface ApiResponse {
    statusCode: number;
    message: string;
    data?: any;
}

export const sendResponse = (res: Response, { statusCode, message, data }: ApiResponse): Response => {
    return res.status(statusCode).json({
        success: statusCode >= 200 && statusCode < 300, // Mark success based on status code
        message,
        data,
    });
};

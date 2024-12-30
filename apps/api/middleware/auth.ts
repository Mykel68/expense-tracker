import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { sendResponse } from '../utils/sendResponse';
import { errorHandler } from '../utils/error';

const { JWT_SECRET_KEY, X_API_KEY } = require('../config/env');

export interface AuthenticatedRequest extends Request {
    userId?: string;
}

export const verify_X_API_KEY = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let apiKeyHeader = req.headers['x-api-key'];

        // Ensure apiKeyHeader is a string
        if (Array.isArray(apiKeyHeader)) {
            apiKeyHeader = apiKeyHeader[0]; // Use the first value if it's an array
        }

        if (!apiKeyHeader) {
            sendResponse(res, {
                statusCode: 401,
                message: 'Unauthorized: Missing API key',
            });
            return;
        }

        // Extract the actual API key (if prefixed with 'Bearer ')
        const apiKey = apiKeyHeader.startsWith('Bearer ')
            ? apiKeyHeader.split(' ')[1]
            : apiKeyHeader;

        if (apiKey !== X_API_KEY) {
            sendResponse(res, {
                statusCode: 401,
                message: 'Unauthorized: Invalid API key',
            });
            return;
        }

        next();
    } catch (error) {
        const { statusCode, message } = errorHandler(error);
        sendResponse(res, { statusCode, message });
    }
};




export const isSignedIn = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        sendResponse(res, {
            statusCode: 401,
            message: 'Unauthorized: No token provided',
        });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY) as JwtPayload;
        req.userId = decoded.userId as string;
        next();
    } catch (err) {
        sendResponse(res, {
            statusCode: 401,
            message: 'Unauthorized: Invalid or expired token',
        });
    }
};
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




// export const isSignedIn = (req: Request, res: Response, next: NextFunction): void => {
//     // Check for token in Authorization header
//     const token = req.headers.authorization?.split(' ')[1];  // Expected format: "Bearer <token>"

//     // If no token is provided, return unauthorized response
//     if (!token) {
//         sendResponse(res, {
//             statusCode: 401,
//             message: 'Unauthorized: No token provided',
//         });
//         return;
//     }

//     try {
//         // Verify the token and decode the payload
//         const decoded = jwt.verify(token, JWT_SECRET_KEY) as { userId: string };

//         // Attach userId from the decoded token to the request object
//         req.userId = decoded.userId;

//         // Proceed to the next middleware or route handler
//         next();
//     } catch (err) {
//         // If the token is invalid or expired, return unauthorized response
//         sendResponse(res, {
//             statusCode: 401,
//             message: 'Unauthorized: Invalid or expired token',
//         });
//     }
// };

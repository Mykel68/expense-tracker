import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../config/db/index';
import { user } from '../config/db/schema';
import { sendResponse } from '../utils/sendResponse';
import { errorHandler } from '../utils/error';
import { eq } from 'drizzle-orm';
import { checkMissingFields } from '../utils/checkMissingFields';
const { JWT_SECRET } = require('../config/env');


// Register User
export const registerUser = async (req: Request, res: Response): Promise<void> => {

    // Validate required fields
    const requiredFields = ['email', 'password'];
    if (checkMissingFields(req, res, requiredFields))
        return;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Insert user into the database
        await db.insert(user).values({ email: req.body.email, password: hashedPassword });

        // Send successful response
        sendResponse(res, {
            statusCode: 201,
            message: 'User registered successfully',
        });
    } catch (error) {
        const { statusCode, message } = errorHandler(error);
        sendResponse(res, { statusCode, message });
    }
};



// Login User
export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        // Fetch the user from the database
        const existingUser = await db
            .select()
            .from(user)
            .where(eq(user.email, email))
            .execute();

        if (existingUser.length === 0) {
            throw new Error('Invalid credentials');
        }

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(password, existingUser[0].password);

        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        // Generate JWT token
        const token = jwt.sign({ userId: existingUser[0] }, JWT_SECRET, {
            expiresIn: '1h',
        });

        // Send successful response with token
        sendResponse(res, {
            statusCode: 200,
            message: 'Login successful',
            data: { token },
        });
    } catch (error) {
        const { statusCode, message } = errorHandler(error);
        sendResponse(res, { statusCode, message });
    }
};

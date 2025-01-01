import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/User';
import { sendResponse } from '../utils/sendResponse';
import { errorHandler } from '../utils/error';
import { checkMissingFields } from '../utils/validation';

const { JWT_SECRET } = require('../config/env');

// Register User
export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password, name } = req.body;

    try {
        // Validate required fields
        const requiredFields = ['email', 'password', 'name'];
        if (checkMissingFields(req, res, requiredFields))
            return;

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            sendResponse(res, {
                statusCode: 400,
                message: 'Email is already registered.',
            });
            return;
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        await User.create({ email, password: hashedPassword, name });

        sendResponse(res, {
            statusCode: 201,
            message: 'User registered successfully.',
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
        // Check for missing fields
        if (!email || !password) {
            sendResponse(res, {
                statusCode: 400,
                message: 'Email and password are required.',
            });
            return;
        }

        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            sendResponse(res, {
                statusCode: 400,
                message: 'Invalid credentials.',
            });
            return;
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            sendResponse(res, {
                statusCode: 400,
                message: 'Invalid credentials.',
            });
            return;
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET as string, {
            expiresIn: '1h',
        });

        sendResponse(res, {
            statusCode: 200,
            message: 'Login successful.',
            data: { token },
        });
    } catch (error) {
        console.error('Error logging in:', error);
        // sendResponse(res, {
        //     statusCode: 500,
        //     message: 'Internal server error.',
        // });
        const { statusCode, message } = errorHandler(error);
        sendResponse(res, { statusCode, message });
    }
};




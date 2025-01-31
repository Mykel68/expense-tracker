import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/User';
import { sendResponse } from '../utils/sendResponse';
import { errorHandler } from '../utils/error';
import { checkMissingFields } from '../utils/validation';
import exp from 'constants';

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

    try {
        // Check for missing fields
        const { email, password } = req.body;
        const requiredFields = ['email', 'password'];
        if (checkMissingFields(req, res, requiredFields))
            return;

        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            sendResponse(res, {
                statusCode: 400,
                message: 'Invalid credentials to login.',
            });
            return;
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            sendResponse(res, {
                statusCode: 400,
                message: 'Invalid password .',
            });
            return;
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id, email: user.email, name: user.name }, JWT_SECRET, {
            expiresIn: '1h', // Token expiration
        });

        // Send successful response with token
        sendResponse(res, {
            statusCode: 200,
            message: 'Login successful.',
            data: { token },
        });
    } catch (error) {
        console.error('Error logging in:', error);

        // Use errorHandler to handle different types of errors (e.g., database issues, validation errors)
        const { statusCode, message } = errorHandler(error);
        sendResponse(res, { statusCode, message });
    }
};

export const verifyName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body;

        // Validate input
        if (!name || typeof name !== 'string' || name.trim() === '') {
            sendResponse(res, {
                statusCode: 400,
                message: 'A valid name is required.',
            });
            return;
        }

        // Check if the name exists in the database
        const user = await User.findOne({ where: { name } });

        // Respond based on availability
        if (user) {
            sendResponse(res, {
                statusCode: 208,
                message: 'Name is already taken.',
                data: { available: false },
            });
        } else {
            sendResponse(res, {
                statusCode: 200,
                message: 'Name is available.',
                data: { available: true },
            });
        }
    } catch (error) {
        console.error('Error verifying name:', error);

        // Handle and respond to errors
        const { statusCode, message } = errorHandler(error);
        sendResponse(res, { statusCode, message });
    }
};

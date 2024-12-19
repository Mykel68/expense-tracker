import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../config/db';
import { users } from '../model/User';

const JWT_SECRET = process.env.JWT_SECRET;

export const registerUser = async (email: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const [newUser] = await db
            .insert(users)
            .values({ email, password: hashedPassword })
            .returning();
        return { message: 'User registered successfully' };
    } catch (error) {
        console.error(error);
        throw new Error('Error registering user');
    }
};

export const loginUser = async (email: string, password: string) => {
    const user = await db
        .select()
        .from(users)
        .where(users.email.eq(email))
        .execute();

    if (user.length === 0) {
        throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ userId: user[0].id }, JWT_SECRET, {
        expiresIn: '1h',
    });

    return { token };
};

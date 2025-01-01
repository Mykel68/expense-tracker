import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    logging: false,
});

export const connectToDatabase = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');

        // Synchronize all models
        await sequelize.sync({ alter: true }); // Use `force: true` for a full reset in development
        console.log('Database synchronized.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
};

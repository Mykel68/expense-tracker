import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Expense extends Model { }

Expense.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isRecurring: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // Indicates if the expense is recurring
        },
        recurrenceInterval: {
            type: DataTypes.STRING, // e.g., 'daily', 'weekly', 'monthly', 'yearly'
            allowNull: true,
        },
        recurrenceEndDate: {
            type: DataTypes.DATE, // Optional end date for the recurrence
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Expense',
    }
);

export default Expense;

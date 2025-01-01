// model/Expense.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';
import User from './User';
import { RecurrenceInterval } from '../utils/enum';

class Expense extends Model {
    public id!: string;
    public title!: string | null;
    public amount!: number | null;
    public date!: Date | null;
    public userId!: number;
    public isRecurring!: boolean;
    public recurrenceInterval!: string | null;
    public recurrenceEndDate!: Date | null;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date | null;
}


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
            type: DataTypes.UUID,
            allowNull: false,
        },
        isRecurring: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // Indicates if the expense is recurring
        },
        recurrenceInterval: {
            type: DataTypes.ENUM(...Object.values(RecurrenceInterval)), // Using enum values
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

// Define associations
Expense.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Expense, { foreignKey: 'userId' });

export default Expense;

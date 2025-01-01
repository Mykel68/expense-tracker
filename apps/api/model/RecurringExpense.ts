import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';
import User from './User';

class RecurringExpense extends Model { }

RecurringExpense.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        frequency: {
            type: DataTypes.STRING, // e.g., 'monthly', 'weekly'
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'RecurringExpense',
        timestamps: true,
    }
);

// Establish relationships
User.hasMany(RecurringExpense, { foreignKey: 'userId' });
RecurringExpense.belongsTo(User, { foreignKey: 'userId' });

export default RecurringExpense;

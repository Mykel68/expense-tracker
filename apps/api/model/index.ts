import User from './User';
import Expense from './Expense';
import Budget from './Budget';
import Insight from './Insight';
import RecurringExpense from './RecurringExpense';

const syncDatabase = async () => {
    try {
        await User.sync({ alter: true });
        await Expense.sync({ alter: true });
        await Budget.sync({ alter: true });
        await Insight.sync({ alter: true });
        await RecurringExpense.sync({ alter: true });
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

syncDatabase();

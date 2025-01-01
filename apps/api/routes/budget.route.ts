import { Router } from 'express';
import {
    createBudget,
    getBudgets,
    updateBudget,
    deleteBudget,
} from '../controllers/budget.controller';
import { verify_X_API_KEY } from '../middleware/auth';

const router = Router();

router.post('/', verify_X_API_KEY, createBudget);
router.get('/:userId', verify_X_API_KEY, getBudgets);
router.put('/:id', verify_X_API_KEY, updateBudget);
router.delete('/:id', verify_X_API_KEY, deleteBudget);

export default router;

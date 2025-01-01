import { Router } from 'express';
import {
    createBudget,
    getBudgets,
    updateBudget,
    deleteBudget,
} from '../controllers/budget.controller';

const router = Router();

router.post('/', createBudget);
router.get('/:userId', getBudgets);
router.put('/:id', updateBudget);
router.delete('/:id', deleteBudget);

export default router;

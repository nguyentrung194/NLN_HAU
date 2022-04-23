import { Router } from 'express';
import ExpensesController from '@controllers/expenses.controller';
import { CreateExpensDto } from '@dtos/expenses.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddlewareAdmin from '@/middlewares/auth.middleware.admin';

class ExpensesRoute implements Routes {
  public path = '/expenses';
  public router = Router();
  public expensesController = new ExpensesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      authMiddlewareAdmin,
      this.expensesController.getExpenses,
    );
    this.router.get(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.expensesController.getExpensById,
    );
    this.router.post(
      `${this.path}`,
      authMiddlewareAdmin,
      validationMiddleware(CreateExpensDto, 'body'),
      this.expensesController.createExpens,
    );
    this.router.put(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      validationMiddleware(CreateExpensDto, 'body', true),
      this.expensesController.updateExpens,
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.expensesController.deleteExpens,
    );
  }
}

export default ExpensesRoute;

import { NextFunction, Request, Response } from 'express';
import { CreateExpensDto } from '@dtos/expenses.dto';
import { Expens } from '@/interfaces/interface';
import expensesService from '@services/expenses.service';

class ExpensesController {
  public expensesService = new expensesService();

  public getExpenses = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllExpensesData: Expens[] = await this.expensesService.findAllExpens();

      res.status(200).json({ data: findAllExpensesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getExpensById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const expensId: string = req.params.id;
      const findOneExpensData: Expens = await this.expensesService.findExpensById(
        expensId,
      );

      res.status(200).json({ data: findOneExpensData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createExpens = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const expensData: CreateExpensDto = req.body;
      const createExpensData: Expens = await this.expensesService.createExpens(
        expensData,
      );

      res.status(201).json({ data: createExpensData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateExpens = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const expensId: string = req.params.id;
      const expensData: CreateExpensDto = req.body;
      const updateExpensData: Expens = await this.expensesService.updateExpens(
        expensId,
        expensData,
      );

      res.status(200).json({ data: updateExpensData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteExpens = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const expensId: string = req.params.id;
      const deleteExpensData: Expens = await this.expensesService.deleteExpens(expensId);

      res.status(200).json({ data: deleteExpensData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ExpensesController;

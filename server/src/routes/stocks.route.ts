import { Router } from 'express';
import StocksController from '@controllers/stocks.controller';
import { CreateStockDto } from '@dtos/stocks.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddlewareAdmin from '@/middlewares/auth.middleware.admin';

class StocksRoute implements Routes {
  public path = '/stocks';
  public router = Router();
  public stocksController = new StocksController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddlewareAdmin, this.stocksController.getStocks);
    this.router.get(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.stocksController.getStockById,
    );
    this.router.post(
      `${this.path}`,
      authMiddlewareAdmin,
      validationMiddleware(CreateStockDto, 'body'),
      this.stocksController.createStock,
    );
    this.router.put(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      validationMiddleware(CreateStockDto, 'body', true),
      this.stocksController.updateStock,
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.stocksController.deleteStock,
    );
  }
}

export default StocksRoute;

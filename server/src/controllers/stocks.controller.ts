import { NextFunction, Request, Response } from 'express';
import { CreateStockDto } from '@dtos/stocks.dto';
import { Stock } from '@/interfaces/interface';
import stocksService from '@services/stocks.service';

class StocksController {
  public stocksService = new stocksService();

  public getStocks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllStocksData: Stock[] = await this.stocksService.findAllStock();

      res.status(200).json({ data: findAllStocksData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getStockById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stockId: string = req.params.id;
      const findOneStockData: Stock = await this.stocksService.findStockById(stockId);

      res.status(200).json({ data: findOneStockData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stockData: CreateStockDto = req.body;
      const createStockData: Stock = await this.stocksService.createStock(stockData);

      res.status(201).json({ data: createStockData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stockId: string = req.params.id;
      const stockData: CreateStockDto = req.body;
      const updateStockData: Stock = await this.stocksService.updateStock(
        stockId,
        stockData,
      );

      res.status(200).json({ data: updateStockData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stockId: string = req.params.id;
      const deleteStockData: Stock = await this.stocksService.deleteStock(stockId);

      res.status(200).json({ data: deleteStockData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default StocksController;

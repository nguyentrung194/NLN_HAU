import { CreateStockDto } from '@dtos/stocks.dto';
import { HttpException } from '@exceptions/HttpException';
import { Stock } from '@/interfaces/interface';
import { stockModel } from '@/models/model';
import { isEmpty } from '@utils/util';

class StockService {
  public stocks = stockModel;

  public async findAllStock(): Promise<Stock[]> {
    const stocks: Stock[] = await this.stocks.find();
    return stocks;
  }

  public async findStockById(stockId: string): Promise<Stock> {
    if (isEmpty(stockId)) throw new HttpException(400, "You're not stockId");

    const findStock: Stock = await this.stocks.findOne({ id: stockId });
    if (!findStock) throw new HttpException(409, "You're not stock");

    return findStock;
  }

  public async createStock(stockData: CreateStockDto): Promise<Stock> {
    if (isEmpty(stockData)) throw new HttpException(400, "You're not stockData");

    const createStockData: Stock = await this.stocks.create({
      ...stockData,
    });

    return createStockData;
  }

  public async updateStock(stockId: string, stockData: CreateStockDto): Promise<Stock> {
    if (isEmpty(stockData)) throw new HttpException(400, "You're not stockData");

    const updateStockById: Stock = await this.stocks.findByIdAndUpdate(stockId, {
      stockData,
    });
    if (!updateStockById) throw new HttpException(409, "You're not stock");

    return updateStockById;
  }

  public async deleteStock(stockId: string): Promise<Stock> {
    const deleteStockById: Stock = await this.stocks.findByIdAndDelete(stockId);
    if (!deleteStockById) throw new HttpException(409, "You're not stock");

    return deleteStockById;
  }
}

export default StockService;

import { CreateExpensDto } from '@dtos/expenses.dto';
import { HttpException } from '@exceptions/HttpException';
import { Expens } from '@/interfaces/interface';
import { expensModel } from '@/models/model';
import { isEmpty } from '@utils/util';

class ExpensService {
  public expenses = expensModel;

  public async findAllExpens(): Promise<Expens[]> {
    const expenses: Expens[] = await this.expenses.find();
    return expenses;
  }

  public async findExpensById(expensId: string): Promise<Expens> {
    if (isEmpty(expensId)) throw new HttpException(400, "You're not expensId");

    const findExpens: Expens = await this.expenses.findOne({ id: expensId });
    if (!findExpens) throw new HttpException(409, "You're not expens");

    return findExpens;
  }

  public async createExpens(expensData: CreateExpensDto): Promise<Expens> {
    if (isEmpty(expensData)) throw new HttpException(400, "You're not expensData");

    const createExpensData: Expens = await this.expenses.create({
      ...expensData,
    });

    return createExpensData;
  }

  public async updateExpens(
    expensId: string,
    expensData: CreateExpensDto,
  ): Promise<Expens> {
    if (isEmpty(expensData)) throw new HttpException(400, "You're not expensData");

    const updateExpensById: Expens = await this.expenses.findByIdAndUpdate(expensId, {
      expensData,
    });
    if (!updateExpensById) throw new HttpException(409, "You're not expens");

    return updateExpensById;
  }

  public async deleteExpens(expensId: string): Promise<Expens> {
    const deleteExpensById: Expens = await this.expenses.findByIdAndDelete(expensId);
    if (!deleteExpensById) throw new HttpException(409, "You're not expens");

    return deleteExpensById;
  }
}

export default ExpensService;

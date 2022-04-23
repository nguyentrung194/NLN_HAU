import { CreateInvoicesDto } from '@dtos/invoicesList.dto';
import { HttpException } from '@exceptions/HttpException';
import { Invoices } from '@/interfaces/interface';
import { invoicesModel } from '@/models/model';
import { isEmpty } from '@utils/util';

class InvoicesService {
  public invoicesList = invoicesModel;

  public async findAllInvoices(): Promise<Invoices[]> {
    const invoicesList: Invoices[] = await this.invoicesList.find();
    return invoicesList;
  }

  public async findInvoicesById(invoicesId: string): Promise<Invoices> {
    if (isEmpty(invoicesId)) throw new HttpException(400, "You're not invoicesId");

    const findInvoices: Invoices = await this.invoicesList.findOne({ id: invoicesId });
    if (!findInvoices) throw new HttpException(409, "You're not invoices");

    return findInvoices;
  }

  public async createInvoices(invoicesData: CreateInvoicesDto): Promise<Invoices> {
    if (isEmpty(invoicesData)) throw new HttpException(400, "You're not invoicesData");

    const createInvoicesData: Invoices = await this.invoicesList.create({
      ...invoicesData,
    });

    return createInvoicesData;
  }

  public async updateInvoices(
    invoicesId: string,
    invoicesData: CreateInvoicesDto,
  ): Promise<Invoices> {
    if (isEmpty(invoicesData)) throw new HttpException(400, "You're not invoicesData");

    const updateInvoicesById: Invoices = await this.invoicesList.findByIdAndUpdate(
      invoicesId,
      { invoicesData },
    );
    if (!updateInvoicesById) throw new HttpException(409, "You're not invoices");

    return updateInvoicesById;
  }

  public async deleteInvoices(invoicesId: string): Promise<Invoices> {
    const deleteInvoicesById: Invoices = await this.invoicesList.findByIdAndDelete(
      invoicesId,
    );
    if (!deleteInvoicesById) throw new HttpException(409, "You're not invoices");

    return deleteInvoicesById;
  }
}

export default InvoicesService;

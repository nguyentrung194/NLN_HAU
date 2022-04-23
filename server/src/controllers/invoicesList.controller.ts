import { NextFunction, Request, Response } from 'express';
import { CreateInvoicesDto } from '@dtos/invoicesList.dto';
import { Invoices } from '@/interfaces/interface';
import invoicesListService from '@services/invoicesList.service';

class InvoicesListController {
  public invoicesListService = new invoicesListService();

  public getInvoicesList = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllInvoicesListData: Invoices[] =
        await this.invoicesListService.findAllInvoices();

      res.status(200).json({ data: findAllInvoicesListData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getInvoicesById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const invoicesId: string = req.params.id;
      const findOneInvoicesData: Invoices =
        await this.invoicesListService.findInvoicesById(invoicesId);

      res.status(200).json({ data: findOneInvoicesData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createInvoices = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const invoicesData: CreateInvoicesDto = req.body;
      const createInvoicesData: Invoices = await this.invoicesListService.createInvoices(
        invoicesData,
      );

      res.status(201).json({ data: createInvoicesData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateInvoices = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const invoicesId: string = req.params.id;
      const invoicesData: CreateInvoicesDto = req.body;
      const updateInvoicesData: Invoices = await this.invoicesListService.updateInvoices(
        invoicesId,
        invoicesData,
      );

      res.status(200).json({ data: updateInvoicesData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteInvoices = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const invoicesId: string = req.params.id;
      const deleteInvoicesData: Invoices = await this.invoicesListService.deleteInvoices(
        invoicesId,
      );

      res.status(200).json({ data: deleteInvoicesData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default InvoicesListController;

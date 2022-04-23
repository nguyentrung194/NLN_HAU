import { Router } from 'express';
import InvoicesListController from '@controllers/invoicesList.controller';
import { CreateInvoicesDto } from '@dtos/invoicesList.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddlewareAdmin from '@/middlewares/auth.middleware.admin';

class InvoicesListRoute implements Routes {
  public path = '/invoicesList';
  public router = Router();
  public invoicesListController = new InvoicesListController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      authMiddlewareAdmin,
      this.invoicesListController.getInvoicesList,
    );
    this.router.get(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.invoicesListController.getInvoicesById,
    );
    this.router.post(
      `${this.path}`,
      authMiddlewareAdmin,
      validationMiddleware(CreateInvoicesDto, 'body'),
      this.invoicesListController.createInvoices,
    );
    this.router.put(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      validationMiddleware(CreateInvoicesDto, 'body', true),
      this.invoicesListController.updateInvoices,
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.invoicesListController.deleteInvoices,
    );
  }
}

export default InvoicesListRoute;

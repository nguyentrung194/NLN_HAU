import { Router } from 'express';
import CustomersController from '@controllers/customers.controller';
import { CreateCustomerDto } from '@dtos/customers.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddlewareAdmin from '@/middlewares/auth.middleware.admin';

class CustomersRoute implements Routes {
  public path = '/customers';
  public router = Router();
  public customersController = new CustomersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      authMiddlewareAdmin,
      this.customersController.getCustomers,
    );
    this.router.get(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.customersController.getCustomerById,
    );
    this.router.post(
      `${this.path}`,
      authMiddlewareAdmin,
      validationMiddleware(CreateCustomerDto, 'body'),
      this.customersController.createCustomer,
    );
    this.router.put(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      validationMiddleware(CreateCustomerDto, 'body', true),
      this.customersController.updateCustomer,
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddlewareAdmin,
      this.customersController.deleteCustomer,
    );
  }
}

export default CustomersRoute;

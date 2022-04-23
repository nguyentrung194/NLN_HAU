import { NextFunction, Request, Response } from 'express';
import { CreateCustomerDto } from '@dtos/customers.dto';
import { User } from '@/interfaces/interface';
import customersService from '@services/customers.service';

class CustomersController {
  public customersService = new customersService();

  public getCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCustomersData: User[] = await this.customersService.findAllCustomer();

      res.status(200).json({ data: findAllCustomersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerId: string = req.params.id;
      const findOneCustomerData: User = await this.customersService.findCustomerById(
        customerId,
      );

      res.status(200).json({ data: findOneCustomerData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerData: CreateCustomerDto = req.body;
      const createCustomerData: User = await this.customersService.createCustomer(
        customerData,
      );

      res.status(201).json({ data: createCustomerData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerId: string = req.params.id;
      const customerData: CreateCustomerDto = req.body;
      const updateCustomerData: User = await this.customersService.updateCustomer(
        customerId,
        customerData,
      );

      res.status(200).json({ data: updateCustomerData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerId: string = req.params.id;
      const deleteCustomerData: User = await this.customersService.deleteCustomer(
        customerId,
      );

      res.status(200).json({ data: deleteCustomerData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CustomersController;

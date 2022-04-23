import { CreateCustomerDto } from '@dtos/customers.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@/interfaces/interface';
import { userModel } from '@/models/model';
import { isEmpty } from '@utils/util';

class CustomerService {
  public customers = userModel;

  public async findAllCustomer(): Promise<User[]> {
    const customers: User[] = await this.customers.find();
    return customers;
  }

  public async findCustomerById(customerId: string): Promise<User> {
    if (isEmpty(customerId)) throw new HttpException(400, "You're not customerId");

    const findCustomer: User = await this.customers.findOne({ id: customerId });
    if (!findCustomer) throw new HttpException(409, "You're not customer");

    return findCustomer;
  }

  public async createCustomer(customerData: CreateCustomerDto): Promise<User> {
    if (isEmpty(customerData)) throw new HttpException(400, "You're not customerData");

    const createCustomerData: User = await this.customers.create({
      ...customerData,
    });

    return createCustomerData;
  }

  public async updateCustomer(
    customerId: string,
    customerData: CreateCustomerDto,
  ): Promise<User> {
    if (isEmpty(customerData)) throw new HttpException(400, "You're not customerData");

    const updateCustomerById: User = await this.customers.findByIdAndUpdate(customerId, {
      customerData,
    });
    if (!updateCustomerById) throw new HttpException(409, "You're not customer");

    return updateCustomerById;
  }

  public async deleteCustomer(customerId: string): Promise<User> {
    const deleteCustomerById: User = await this.customers.findByIdAndDelete(customerId);
    if (!deleteCustomerById) throw new HttpException(409, "You're not customer");

    return deleteCustomerById;
  }
}

export default CustomerService;

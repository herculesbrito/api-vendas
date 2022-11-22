import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IPaginateCustomer {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page?: number | null | undefined;
  next_page?: number | null | undefined;
  last_page?: number | null | undefined;
  data: Customer[];
}

class ListCustomerService {
  public async execute(): Promise<IPaginateCustomer> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customers = await customersRepository.createQueryBuilder().paginate();

    return customers;
  }
}

export default ListCustomerService;

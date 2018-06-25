import CustomerListController from './customer-list.controller'
import CustomerFactory from '../services/customer.factory';
import CustomerRegistrationErrorFactory from '../../error/services/customer-registration-error.factory';

const Customer = CustomerFactory(CustomerRegistrationErrorFactory())
const customers = [new Customer({
  id:1,
  email: 'attila.satan@gmail.com',
  name: 'Attila Satan',
  country: 'Turkey',
  city: 'Ankara',
}), new Customer({
  id:2,
  email: 'cigdem.satan@gmail.com',
  name: 'Çiğdem Satan',
  country: 'Turkey',
  city: 'Ankara',
})];

describe('CustomerListController', ()=>{

  test('instance has a customer property which equals to injected customers', ()=>{
    expect(new CustomerListController(customers)).toHaveProperty('customers')
    expect((new CustomerListController(customers)).customers).toMatchObject(customers);
  })
});

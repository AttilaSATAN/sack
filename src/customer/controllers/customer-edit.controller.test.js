import CustomerEditController from './customer-edit.controller';
import CustomerFactory from '../services/customer.factory';
import CustomerRegistrationErrorFactory from '../../error/services/customer-registration-error.factory';

const mockfn = jest.fn();
const mockSaveMethod = jest.fn();
const scope = {
  edit:true,
  //Mock for $scope.$apply. We do not need a real $digest cycle here.
  $apply: function(fn){
    fn();
    mockfn();
    
  }
};

const Customer = CustomerFactory(CustomerRegistrationErrorFactory())
const customer = Customer.getById(1);
//lets watch Customer#save calles by changing method with a function mock that could be watched.
customer.save = mockSaveMethod;

describe('CustomerEditController', ()=>{
  it('should have a method save, which calls Customer#save when called.', ()=>{
    expect(new CustomerEditController(scope, customer, Customer)).toHaveProperty('save');
    (new CustomerEditController(scope, customer, Customer)).save();
    expect(mockSaveMethod.mock.calls.length).toBe(1);
  });

  test('CustomerEditController#customer is equal to injected customer.', ()=>{
    expect(new CustomerEditController(scope, customer, Customer)).toHaveProperty('customer');
    expect((new CustomerEditController(scope, customer, Customer)).customer).toMatchObject(customer);

  })
}); 

import CustomerEditController from './customer-edit.controller';
import CustomerFactory from '../services/customer.factory';
import CustomerRegistrationErrorFactory from '../../error/services/customer-registration-error.factory';

let mockfn = jest.fn();
let scope = {
  //Mock for $scope.$apply. We do not need a real $digest cycle here.
  $apply: function(fn){
    fn();
    mockfn();
    
  }
}
let Customer = CustomerFactory(CustomerRegistrationErrorFactory()))
let customer = Customer.getById(1);

describe('CustomerEditController', ()=>{
  it('should have a method save', ()=>{
    expect(new CustomerEditController(scope, customer, Customer).toHaveProperty('save');
  });
});
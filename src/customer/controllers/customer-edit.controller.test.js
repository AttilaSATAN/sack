import 'angular';
import 'angular-mocks';
import CustomerEditController from './customer-edit.controller';
import Customer from '../services/customer.factory'

describe('CustomerEditController', ()=>{
  it('should have a method save', ()=>{
    expect(new CustomerEditController({}, {}, Customer)).toHaveProperty('save');
  })
});
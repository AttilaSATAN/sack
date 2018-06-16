import 'angular';
import 'angular-mocks';
import customer from './customer.module'

describe('customer module ', function(){
    it(' should have named as `customer`', function(){
        expect(customer.name).toEqual('customer')
    });
});
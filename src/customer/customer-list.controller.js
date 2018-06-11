/**
 * @this vm
 * @ngdoc controller
 * @name customer.controller:CustomerListController
 *
 * @description
 * Main Controller for customer
 */
class CustomerListController {
  constructor() {
    console.log('AAAAAAAAAAA')
    const vm = this;
    vm.customers = Customer.list();
  }
}

export default CustomerListController;
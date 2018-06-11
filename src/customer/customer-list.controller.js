/**
 * @this vm
 * @ngdoc controller
 * @name customer.controller:CustomerListController
 *
 * @description
 * Main Controller for customer
 */
class CustomerListController {
  constructor(Customer) {
    const vm = this;
    vm.customers = Customer.list();
  }
}

CustomerListController.$inject = ['Customer'];
export default CustomerListController;
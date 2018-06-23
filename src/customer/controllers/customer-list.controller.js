/**
 * @this vm
 * @ngdoc controller
 * @name customer.controller:CustomerListController
 *
 * @description
 * Main Controller for customer
 */
class CustomerListController {
  constructor(customers) {

    const vm = this;
    vm.customers = customers;
  }
}

CustomerListController.$inject = ['customers'];

export default CustomerListController;
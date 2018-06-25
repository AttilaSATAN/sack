/**
 * @this vm
 * @ngdoc controller
 * @name customer.controller:CustomerListController
 *
 * @description
 * Controller for customer list page
 */
class CustomerListController {
  constructor(customers) {

    this.customers = customers;
  }
}

CustomerListController.$inject = ['customers'];

export default CustomerListController;
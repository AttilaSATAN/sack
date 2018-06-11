import 'angular';
import '@uirouter/angularjs';
import customerModuleConfig from './customer.state.config';
import CustomerListController from './customer-list.controller';
import Customer from './customer';



/**
  * @ngdoc overview
  * @name customer.module:customer
  *
  * @description
  * Customer module 
  * 
*/
const customer = angular.module('customer', ['ui.router', 'error']);

customer.config(customerModuleConfig);
customer.factory('CustomerFactory', CustomerFactory)
customer.controller('CustomerListController', CustomerListController);

angular.bootstrap(document, ['customer']);

export default customer;
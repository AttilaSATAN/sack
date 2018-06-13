import CustomerFactory from './services/customer.factory';
import CustomerListController from './controllers/customer-list.controller';
import customerStateConfig from './customer.state.config';



/**
 * @ngdoc overview
 * @name customer.module:customer
 *
 * @description
 * Customer module 
 * 
 */
const customer = angular.module('customer', ['ui.router', 'error'])
  .config(customerStateConfig)
  .factory('Customer', CustomerFactory)
  .controller('CustomerListController', CustomerListController);






export default customer;
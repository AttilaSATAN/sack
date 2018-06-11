import 'angular';
import '@uirouter/angularjs';
import './customer.state.config';




/**
  * @ngdoc overview
  * @name customer.module:customer
  *
  * @description
  * Customer module 
  * 
  * 
*/
const customer = angular.module('customer', ['ui.router']);

customer.config(customerModuleConfig);

angular.bootstrap(document, ['customer'])

export default customer;
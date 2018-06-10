import 'angular';
import '@uirouter/angularjs';

const customer = angular.module('customer', ['ui.router']);

angular.bootstrap(document, ['customer'])

export default customer;
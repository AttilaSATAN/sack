'use strict';

import customerListTemplate from './customer-list.view.html';

customerModuleConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
/**
* Configures ui-router's states.
* @memberof customer
* @ngdoc config
* @name customerModuleConfig
* @param {Service} $urlRouterProvider Watches $location and provides interface to default state
* @param {Service} $stateProvider Provides UI-Router State configuration object 
* @param
*/
function customerModuleConfig($urlRouterProvider, $locationProvider, $stateProvider){

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);


    $stateProvider
        .state('root', {
            url: '/',
        })
        .state('root.customer', {
            url: 'customer',
            controller: 'CustomerListController as vm',
            template: customerListTemplate
        })

}

export {customerModuleConfig};
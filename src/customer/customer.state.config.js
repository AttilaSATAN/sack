'use strict';

import customerListTemplate from './customer-list.view.html';
import homeTemplate from '../home/home.view.html';

customerModuleConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
/**
* Configures ui-router's states.
* @memberof customer
* @ngdoc config
* @name customerModuleConfig
* @param {Service} $urlRouterProvider Watches $location and provides interface to default state
* @param {Service} $stateProvider Provides UI-Router State configuration object 
* @param {Service} $locationProvider Used for setting html5mode
*/
 function customerModuleConfig($urlRouterProvider, $locationProvider, $stateProvider){

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('root', {
            url: '/',
            template: homeTemplate
        })
        .state('root.customer', {
            url: 'customer',

            template:'<ui-view/>'
        })
        .state('root.customer.list', {
            resolve:function(){console.log('asdad')},
            url: '/list',
            controller: 'CustomerListController as vm',
            template: customerListTemplate
        });
}

export default customerModuleConfig
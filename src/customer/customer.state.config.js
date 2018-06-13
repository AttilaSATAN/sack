'use strict';

import customerListTemplate from './views/customer-list.view.html';


customerModuleConfig.$inject = [ '$stateProvider'];
/**
 * Configures ui-router's states.
 * @memberof customer
 * @ngdoc config
 * @name customerModuleConfig

 * @param {Service} $stateProvider Provides UI-Router State configuration object 
 * @param {Service} $locationProvider Used for setting html5mode */
function customerModuleConfig( $stateProvider) {

    $stateProvider

        .state('customer', {
            url: '/customer',
            abstract: true
        })
        .state('customer.list', {
            resolve: {
                customers:  function(Customer){
                    return 'Customer.list()'
                }
            },
            url: '/list',
            views: {
                'main@': {
                    controller: 'CustomerListController as vm',
                    template: customerListTemplate
                }
            }

        });
}

export default customerModuleConfig
'use strict';

import customerListTemplate from './views/customer-list.view.html';
import customerEditTemplate from './views/customer-edit.view.html';
import customerNotFoundTemplate from './views/customer-not-found.view.html';

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
                customers:  ['Customer', function(Customer){
                    return Customer.list()
                }]
            },
            url: '/list',
            views: {
                'main@': {
                    controller: 'CustomerListController as vm',
                    template: customerListTemplate
                }
            }
        })
        .state('customer.edit', {
            resolve: {
                customer:  ['$stateParams', 'Customer', '$state', function($stateParams, Customer, $state){
                    let customer;
                    if($stateParams.email) {
                        customer = Customer.getByEMail($stateParams.email);
                        if(!customer) return $state.go('customer.notFound')
                    }
                    return customer || {};
                }]
            },
            url: '/edit/:email',
            views: {
                'main@': {
                    controller: 'CustomerEditController as vm',
                    template: customerEditTemplate
                }
            }
        })
        .state('customer.notFound', {
            url: '/not-found',
            views: {
                'main@': {
                   
                    template: customerNotFoundTemplate
                }
            }
        });
}

export default customerModuleConfig;
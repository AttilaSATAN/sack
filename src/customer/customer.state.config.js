'use strict';

import customerListTemplate from './views/customer-list.view.html';
import customerEditTemplate from './views/customer-edit.view.html';
import customerNotFoundTemplate from './views/customer-not-found.view.html';

customerModuleConfig.$inject = ['$stateProvider'];

/**
 * @description Configures ui-router's states.
 * @memberof customer
 * @ngdoc config
 * @name customerModuleConfig

 * @param {Service} $stateProvider Provides UI-Router State configuration object 
 * @param {Service} $locationProvider Used for setting html5mode */
function customerModuleConfig($stateProvider) {

    $stateProvider
        .state('customer', {
            url: '/customer',
            abstract: true
        })
        .state('customer.list', {
            resolve: {
                customers: customersResolver
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
                customer: customerResolverById
            },
            url: '/edit/:id',
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

customersResolver.$inject = ['Customer'];

function customersResolver(Customer) {
    return Customer.list();
}

customerResolverById.$inject = ['$stateParams', 'Customer', '$state'];

function customerResolverById  ($stateParams, Customer, $state) {
    let customer;
    if ($stateParams.id) {
        customer = Customer.getById($stateParams.id);
        if (!customer) return $state.go('customer.notFound')
    }
    return customer || {};
}

export default customerModuleConfig;
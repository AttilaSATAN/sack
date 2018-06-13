'use strict';

import homeTemplate from './views/home.view.html';

rootStateConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
/**
 * Configures ui-router's states.
 * @memberof customer
 * @ngdoc config
 * @name rootStateConfig
 * @param {Service} $urlRouterProvider Watches $location and provides interface to default state
 * @param {Service} $stateProvider Provides UI-Router State configuration object 
 * @param {Service} $locationProvider Used for setting html5mode
 */
function rootStateConfig($urlRouterProvider, $locationProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'main@': {
                    template: homeTemplate
                }
            }
        });

};

export default rootStateConfig;
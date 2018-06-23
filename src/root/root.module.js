import rootStateConfig from './root.state.config';

const root = angular.module('root', ['ui.router', 'ngMessages', 'error', 'customer'])
  .config(rootStateConfig)
  .run(['$state', '$rootScope', function($state, $rootScope){
    $rootScope.uiState = $state
  }]);



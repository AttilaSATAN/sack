import rootStateConfig from './root.state.config';

const root = angular.module('root', ['ui.router', 'error', 'customer'])
  .config(rootStateConfig)



angular.bootstrap(document, ['root']);
  export default root;
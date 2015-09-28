export default ngModule => {

  ngModule.directive('hello', function() {
//    require('./hello.styl');
    return {
      restrict: 'E',
      scope: {},
//    template: require("hello.html"),
      templateUrl: 'components/hello/hello.html',
      controllerAs: 'vm',
      controller: /*@ngInject*/ function() {
        const vm = this;

        vm.greeting = 'Hello Webpack';
      }
    };
  });

};

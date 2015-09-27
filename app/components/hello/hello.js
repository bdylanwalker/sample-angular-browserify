export default ngModule => {

  ngModule.directive('hello', function() {
//    require('./hello.styl');
    return {
      restrict: 'E',
      scope: {},
//    template: require("hello.html"),
      template: '{{vm.greeting}}',
      controllerAs: 'vm',
      controller: /*@ngInject*/ function() {
        const vm = this;

        vm.greeting = 'Hello Webpack';
      }
    };
  });

};

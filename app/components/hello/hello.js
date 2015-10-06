export default ngModule => {

  ngModule.directive('hello', ($log) => {
    $log.debug('Setup hello directive');

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'components/hello/hello.html',
      controllerAs: 'vm',
      controller: function (vm = this) {
          vm.greeting = 'Hello, directive';

      } //controller
    }; //return
  }); //directive
}; //export

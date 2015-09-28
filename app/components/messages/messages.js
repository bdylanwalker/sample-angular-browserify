export default ngModule => {

    ngModule.directive('messages', function() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'components/messages/messages.html',
            controllerAs: 'vm',
            controller: /*@ngInject*/ function() {
                const vm = this;

                vm.message = 'Hello Messages';
            }
        };
    });

};

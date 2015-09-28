export default ngModule => {

    ngModule.directive('list', function() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'components/list/list.html',
            controllerAs: 'vm',
            controller: /*@ngInject*/ function() {
                const vm = this;

                vm.todos = [
                    { text : "one" },
                    { text : "two" },
                    { text : "three" }
                ];

            }
        };
    });

};

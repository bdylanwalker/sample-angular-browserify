export default ngModule => {

    ngModule.directive('entry', function() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'components/entry/entry.html',
            controllerAs: 'vm',
            controller: /*@ngInject*/ function() {
                const vm = this;

            }
        };
    });

};

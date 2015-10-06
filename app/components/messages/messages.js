export default ngModule => {

    ngModule.directive('messages', ($log,source) => {
        $log.debug('Setup messages directive');

        return {
            restrict: 'E',
            scope: {},
//            templateUrl: 'components/messages/messages.html',
            controllerAs: 'vm',
            controller: /*@ngInject*/ function (vm = this) {
                vm.message = 'Hello Messages';

            },
            link: function(scope, elem){
                source.filter(x => x % 2 === 1)
                    .map(x => x + '!')
                    .forEach(x => elem.append('<li>' + x + '</li>'));
            }
        };
    });
};



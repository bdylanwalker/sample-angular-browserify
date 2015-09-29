export default ngModule => {

    ngModule.directive('messages', function(source) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'components/messages/messages.html',
            controllerAs: 'vm',
            controller: /*@ngInject*/ function() {
                const vm = this;

                vm.message = 'Hello Messages';

            }
            ,
            link: function(scope, elem, attrs){
                source.filter(x => x % 2 === 1)
                    .map(x => x + '!')
                    .forEach(x => elem.append('<div>' + x + '</div>'));
            }
        };
    });

};

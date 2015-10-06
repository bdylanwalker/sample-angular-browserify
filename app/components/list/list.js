export default ngModule => {

    ngModule.directive('list', ($log, todoSource) => {
        $log.debug('Setup list directive');
        return {
            restrict: 'E',
            scope: {},
//            templateUrl: 'components/list/list.html',
            controllerAs: 'vm',
            controller: /*@ngInject*/ function () {
                var vm = this;

            }
            ,
            link: function(scope, elem){

                todoSource.getSource().subscribe(
                    function (x) {
                        $log.info(x);
                        elem.append('<li>' + x + '</li>')
                    },
                    function (err) {
                        $log.error(err);
                    },
                    function () {
                        $log.info('Completed');
                    });

                // causes infinite loop.. forEach(todo => elem.append('<li>' + todo + '</li>'));

            }
        };
    });

};

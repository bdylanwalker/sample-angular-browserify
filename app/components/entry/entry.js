export default ngModule => {

    ngModule.directive('entry',  ($log, todoSource) => {
        $log.debug('Setup entry directive');

        return {
            restrict: 'E',
            scope: {},
            bindToController: {
                formValue: '='
            },
            templateUrl: 'components/entry/entry.html',
            controllerAs: 'vm',
            controller: /*@ngInject*/ function($scope) {
                var vm = this;

                //vm.todos = [];
                //var todoStream = Rx.Observable.from( vm.todos);

                vm.addTodo = function() {
                    todoSource.addTodo( $scope.formValue);

                    //this.todos.push({text:$scope.formValue});
                    $log.debug(`in entry directive, adding todo: ${$scope.formValue}`);
                    $scope.formValue = '';
                }

                // Listen for changes on the name
                //observeOnScope($scope, 'formValue').subscribe(function(change) {
                //    $scope.observedChange = change;
                //    $scope.newValue = change.newValue;
                //    $scope.oldValue = change.oldValue;
                //});

                //var s2 = Rx.Observable.from(this.todos).subscribe(
                //    function (x) {
                //        console.log('Next: ' + x);
                //    },
                //    function (err) {
                //        console.log('Error: ' + err);
                //    },
                //    function () {
                //        console.log('Completed');
                //    });


//                const vm = this;
                //how to get this back out to the main stream?
//                $scope.todos = [];

                //console.log(this.todos);


            }
        };
    });

};

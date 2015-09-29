export default ngModule => {

    ngModule.directive('entry', function(source) {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: 'components/entry/entry.html',
            controllerAs: 'vm',
            controller: /*@ngInject*/ function($scope) {
                angular.extend(this, {
                    todos: []
                });

//                const vm = this;
                //how to get this back out to the main stream?
//                $scope.todos = [];

                console.log(this.todos);

                $scope.addTodo = () => {
                    this.todos.push({text:$scope.formValue});
                    console.log(`in entry directive, adding todo: ${$scope.formValue}`);
                    $scope.formValue = '';

                };

            }
        };
    });

};

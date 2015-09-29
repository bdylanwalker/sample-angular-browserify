export default ngModule => {

    ngModule.directive('entry', function(source) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'components/entry/entry.html',
            controllerAs: 'vm',
            controller: /*@ngInject*/ function($scope) {
                const vm = this;

                //how to get this back out to the main stream?
                $scope.todos = [];

                $scope.addTodo = () => {
                    $scope.todos.push({text:$scope.formValue});
                    $scope.formTodoText = '';
                    console.log($scope.formValue);
                };

            }
        };
    });

};

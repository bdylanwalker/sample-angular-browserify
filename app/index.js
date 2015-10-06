(function () {
    'use strict';

    const angular = require('angular');
    var Rx = require('rx');
    var RxAngular = require('rx-angular');

    const ngModule = angular.module('app', [])
        .config( () => {
            var $log = angular.injector(['ng']).get('$log');
            $log.debug('Config Module');
        })
        .run( ($log) => {
            $log.debug("Running Module");
        });

    ngModule.factory('source', function () {
        return Rx.Observable.interval(500).take(6);
    });

    ngModule.factory('todoSource', function ($log) {
        $log.debug('Setting up todoSource');
        var ts = {};
        var todos = [];

//        ts.ob = Rx.Observable.from(todos);
//        ts.ob = Rx.Observable.ofObjectChanges(todos);

        ts.s = new Rx.Subject();

        ts.addTodo = function (todo) {
            $log.debug('add todo:' + todo);
            todos.push({text:todo});
            ts.s.onNext(todo);
        }

        ts.getSource = function () {
            $log.debug('get todo source');
            return ts.s;
        }

        return ts;
    });

    ngModule.controller('appController', function ($log) {
        angular.extend(this, {});
        $log.debug("Loading App Controller");

    });

    require('./components/hello')(ngModule);
    require('./components/messages')(ngModule);
    require('./components/entry')(ngModule);
    require('./components/list')(ngModule);

})();
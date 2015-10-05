(function () {
    'use strict';

    const angular = require('angular');
    var Rx = require('rx');
    var RxAngular = require('rx-angular');

    const ngModule = angular.module('app', []);

    ngModule.factory('source', () => {
        return Rx.Observable.interval(500).take(6);
    })

    ngModule.controller('appController', function () {
        angular.extend(this, {});

        console.log(this);


    });

    require('./components/hello')(ngModule);
    require('./components/messages')(ngModule);
    require('./components/entry')(ngModule);
    require('./components/list')(ngModule);

})();
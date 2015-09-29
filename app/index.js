(function() {
    'use strict';

    const angular = require('angular');
    const Rx = require('rx');

    const ngModule = angular.module('app', []);

    ngModule.factory('source', () => {
        return Rx.Observable.interval(500).take(6);
    });

    require('./components/hello')(ngModule);
    require('./components/messages')(ngModule);
    require('./components/entry')(ngModule);
    require('./components/list')(ngModule);

})();
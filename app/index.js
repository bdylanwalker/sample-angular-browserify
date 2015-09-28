
const angular = require('angular');

const ngModule = angular.module('app', []);

require('./components/hello')(ngModule);
require('./components/messages')(ngModule);
require('./components/entry')(ngModule);
require('./components/list')(ngModule);


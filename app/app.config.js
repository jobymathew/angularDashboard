'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/knowledge-base', {
          template: '<knowledge-base></knowledge-base>'
        }).
        otherwise('/knowledge-base');
    }
  ]);

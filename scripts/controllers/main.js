'use strict';

/**
 * @ngdoc function
 * @name tenthingsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tenthingsApp
 */
angular.module('tenthingsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name tenthingsApp.controller:TenideasCtrl
 * @description
 * # TenideasCtrl
 * Controller of the tenthingsApp
 */
angular.module('tenthingsApp')
  .controller('TenideasCtrl', function ($scope, Ref, $firebaseArray, $timeout, Auth, user) {
  	$scope.user = user;

  	$scope.getTodayIdeas = function(){
	    $scope.now = new Date();
	    $scope.now.setHours(0,0,0,0); 
	    $scope.startTime = $scope.now.getTime();

	    // synchronize a read-only, synchronized array of messages, limit to Todays Ideas
	    $scope.ideas = $firebaseArray(Ref.child('ideas').orderByChild('time').startAt($scope.startTime).orderByChild('user').equalto($scope.user.uid));

	    // display any errors
	    $scope.ideas.$loaded().catch(alert);

    };

    // provide a method for adding a message
    $scope.addIdea = function(newIdea) {
      if( newIdea ) {
        // push a message to the end of the array
        $scope.ideas.$add({text: newIdea, user: $scope.user.uid, time: Firebase.ServerValue.TIMESTAMP})
          // display any errors
          .catch(alert);
      }
    };

    $scope.getAllIdeas = function(){
	    $scope.now = new Date();
	    $scope.now.setHours(0,0,0,0); 
	    $scope.startTime = $scope.now.getTime();

	    // synchronize a read-only, synchronized array of messages, limit to Todays Ideas
	    $scope.ideas = $firebaseArray(Ref.child('ideas').orderByChild('time'));

	    // display any errors
	    $scope.ideas.$loaded().catch(alert);

    };

    $scope.getTodayIdeas();

//============================================================================================================//
    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }

  });

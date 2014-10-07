'use strict';

angular.module('mean.slideshow').controller('SlideshowController', ['$scope', 'Global', 'Slideshow',
  function($scope, Global, Slideshow) {
    $scope.global = Global;
    $scope.package = {
      name: 'slideshow'
    };

    $scope.selectedSlide = {};
    $scope.slides = [
    	{
    		imageData: 'http://lorempixel.com/800/600/sports/1/'

    	},
    	{
    		imageData: 'http://lorempixel.com/800/600/sports/2/'
    	}
    ];

    $scope.previousSlide = function() {
    	
    };

    $scope.nextSlide = function() {

    };

    $scope.fullscreen = function() {

    };




  }
]);

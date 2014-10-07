'use strict';

angular.module('mean.slideshow').controller('SlideshowController', ['$scope', 'Global', 'Slideshow',
  function($scope, Global, Slideshow) {
    $scope.global = Global;
    $scope.package = {
      name: 'slideshow'
    };
  }
]);

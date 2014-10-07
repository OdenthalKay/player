'use strict';

angular.module('mean.slideshow').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('slideshow', {
      url: '/slideshow',
      templateUrl: 'slideshow/views/index.html'
    });
  }
]);

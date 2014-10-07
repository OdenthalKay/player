'use strict';

angular.module('mean.slideshow').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('slideshow example page', {
      url: '/slideshow/example',
      templateUrl: 'slideshow/views/index.html'
    });
  }
]);

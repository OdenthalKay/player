'use strict';

angular.module('mean.slideshow').controller('SlideshowController', ['$scope', 'Global', 'Slideshow',
  function($scope, Global, Slideshow) {
    $scope.global = Global;
    $scope.package = {
      name: 'slideshow'
    };


    $scope.fullscreenContainerID = '#fullscreen-container';
    $scope.isFullscreen = false;
    $scope.fullscreenSlideID = 0; 
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
      if ($scope.fullscreenSlideID === 0) {
        return;
      }

      $scope.fullscreenSlideID = $scope.fullscreenSlideID-1;
      $scope.changeFullscreenImage();
    };

    $scope.nextSlide = function() {
      if ($scope.fullscreenSlideID === $scope.slides.length-1) {
        return;
      }

      $scope.fullscreenSlideID = $scope.fullscreenSlideID+1;
      $scope.changeFullscreenImage();
    };

    $scope.changeFullscreenImage = function() {
      var element = angular.element($scope.fullscreenContainerID);
      var image = $scope.slides[$scope.fullscreenSlideID].imageData;
      element.css({'background-image': 'url('+image+')'});
    };

    $scope.fullscreen = function(id) {
      $scope.fullscreenSlideID = id;
      $scope.changeFullscreenImage();

    // vollbildmodus aktivieren
    var domElement = angular.element($scope.fullscreenContainerID)[0];
    if (domElement.requestFullscreen) {
      domElement.requestFullscreen();
      return;
    } else if (domElement.msRequestFullscreen) {
      domElement.msRequestFullscreen();
      return;
    } else if (domElement.mozRequestFullScreen) {
      domElement.mozRequestFullScreen();
      return;
    } else if (domElement.webkitRequestFullscreen) {
      domElement.webkitRequestFullscreen();
      return;
    }

    alert('Die fullScreen API wird von diesem Browser nicht unterstützt!');
  };

/*
* Vollbildmodus explizit beenden
*/
$scope.exitFullscreen = function() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};


/*
* Der Listener muss einmalig registriert werden. Er wird immer aufgerufen, wenn ein Wechsel (= Vollbild gestartet/beendet) 
* statgefunden hat. Egal ob explizit, oder über einen Hotkey (bspw. F11).
* Seine Aufgabe ist es, den Vollbild-Container zu verstecken.
*/
$scope.fullscreenChangeListener = function () {
  $scope.isFullscreen = !$scope.isFullscreen;
  
    // muss hier stehen, damit der scope rechtzeitig geupdated wird
    $scope.$apply();
  };
  angular.element(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', $scope.fullscreenChangeListener);

}
]);

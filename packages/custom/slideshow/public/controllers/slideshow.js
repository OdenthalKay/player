'use strict';

angular.module('mean.slideshow').controller('SlideshowController', ['$scope', 'Global', 'Slideshow',
  function($scope, Global, Slideshow) {
    $scope.global = Global;
    $scope.package = {
      name: 'slideshow'
    };


    $scope.isFullscreen = false;
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
    // Slide wechseln und Container sichtbar machen
    var element = angular.element('#fullscreen-container');
    element.css('background-image', 'url(http://lorempixel.com/800/600/sports/2/)');
    //element.attr('class','fullscreen-container');

    // vollbildmodus aktivieren
    var domElement = element[0];
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
* 
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



$scope.next= function() {


angular.element('#fullscreen-container').find('img').attr('src', 'http://lorempixel.com/800/600/sports/1/');


  };
}
]);

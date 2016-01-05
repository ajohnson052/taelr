"use strict";

(function(){
  angular
  .module("taelr", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "js/welcome/welcome.html"
    })
    .state("slideshow", {
      url: "/slideshow",
      templateUrl: "js/slideshow/slideshow.html",
      controller: "SlideshowController",
      controllerAs: "SlideshowViewModel"
    })
  }
})();

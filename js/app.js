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
    .state("sudoku", {
      url: "/sudoku",
      templateUrl: "js/sudoku/sudoku.html",
      controller: "SudokuController",
      controllerAs: "SudokuViewModel"      
    })
    .state("slideshow", {
      url: "/slideshow",
      templateUrl: "js/slideshow.html",
      controller: "SlideshowController",
      controllerAs: "SlideshowViewModel"
    })
  }
})();

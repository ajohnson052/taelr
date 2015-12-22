"use strict";

(function(){
  angular
  .module("taelr")
  .controller("SlideshowController", [
    SlideshowControllerFunction
  ])

  function SlideshowControllerFunction(){
    this.getDoges = function(){
      $.getJSON("https://api.unsplash.com/photos/search?client_id=28ab92b0a76bc92b6e43807c2e5456aca925f50b4148ec19afa5f64261fa7821&query=dog").done(function(response){
        console.log(response)
        response;
      }).fail(function(){
        console.log("failed request");
      })
    }
  }
})();

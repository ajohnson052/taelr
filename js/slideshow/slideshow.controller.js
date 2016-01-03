"use strict";

(function(){
  angular
  .module("taelr")
  .controller("SlideshowController", ["$scope", "$http",
    SlideshowControllerFunction
  ])

  function SlideshowControllerFunction($scope, $http){
      $http.get("https://api.unsplash.com/photos/search?client_id=28ab92b0a76bc92b6e43807c2e5456aca925f50b4148ec19afa5f64261fa7821&query=dog")
      .success(function(response){
        $scope.doges = response;
      })
      .error(function(response){
        console.log("failed request");
      });
      $scope.index = 0;
      $scope.next = function(){
        if($scope.index < $scope.doges.length - 1){
          $scope.index += 1;
        }else{
          $scope.index = 0;
        };
      };
      $scope.prior = function(){
        if($scope.index > 0){
          $scope.index -= 1;
        }else{
          $scope.index = $scope.doges.length - 1;
        }
      };
    };
})();

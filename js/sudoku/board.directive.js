"use strict";

(function(){
  angular
  .module("taelr")
  .directive("sudokuBoard", [function(){
      return{
        templateUrl: "js/sudoku/_sudoku_board.html",
        scope: {
          array: "="
        },
        link: function(scope){
          scope.array = [];
          replace: true;
          scope.makeRow = function(){
            var row = [];
            var j=0;
            while(j<9){
              var num = Math.ceil(Math.random()*9);
              if(row.indexOf(num) === -1){
                row[j] = num;
                j++;
              };
            };
            return row;
          };
          addRows:
            while(scope.array.length<9){
              var row = scope.makeRow();
              for(var i=0; i<scope.array.length; i++){
                for(var j=0; j<9; j++){
                  if(scope.array[i][j] === row[j]){
                    continue addRows;
                  };
                };
              };
              scope.array.push(row);
            };
          }
        };
      }]);


})();

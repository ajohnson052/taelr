"use strict";

(function(){
  angular
  .module("taelr")
  .directive("sudokuBoard", [function(){
    return{
      templateUrl: "js/sudoku/_sudoku_board.html",
      scope: {
        puzzle: "="
      },
      link: function(scope){
        replace: true;
        scope.puzzle = [];
        scope.solution = [];
        scope.makeSolutionRow = function(){
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
        scope.makeSolution = function(){
          addRowsToSolution:
            while(scope.solution.length<9){
              var row = scope.makeSolutionRow();
              for(var i=0; i<scope.solution.length; i++){
                for(var j=0; j<9; j++){
                  if(scope.solution[i][j] === row[j]){
                    continue addRowsToSolution;
                  };
                };
              };
              scope.solution.push(row);
            }
        };
        scope.makePuzzle = function(){
          var tempPuzzle = scope.clone(scope.solution);
          // scope.puzzle = scope.clone(scope.solution);
          scope.solution.forEach(function(array, index){
            var row = [];
            array.forEach(function(number){
              row.push(0);
              if(!scope.check(tempPuzzle)){
              // if(!scope.checkPuzzle()){
                row.push(number);
              };
              // var key = Math.random();
              // if(key > 0.75){
              //   row.push(number);
              // } else{
              //   row.push(0);
              // }
            });
            tempPuzzle.index = row;
          })
          scope.puzzle = tempPuzzle;
        };
        scope.clone = function(array){
          if(Array.isArray(array)){
            var copy = array.slice(0);
            for(var i = 0; i < 9; i++ ) {
              copy[i] = scope.clone(copy[i]);
            }
            return copy;
          }else{
            return array;
          }
        };
        scope.check = function(puzzle){
        // scope.checkPuzzle = function(){
          var tempSolution = scope.clone(puzzle);
          // var tempSolution = scope.puzzle;
          tempSolution.forEach(function(row){
            row.forEach(function(number){
              var index = row.indexOf(number)
              if(number === 0){
                for(var i=1; i<=9; i++){
                  if(row.indexOf(i) === -1){
                    for(var j=1; j<=9; j++){
                      if(tempSolution[j][index] === i){
                        continue;
                      }
                      console.log(i)
                      row[index] = i;
                      break;
                    }
                  };
                };
              }
            })
          })
          if(tempSolution === scope.solution){
            return true;
          }else{
            return false;
          }
        };
        scope.makeSolution();
        scope.makePuzzle();
        // scope.checkPuzzle();
        }
      };
    }]);


})();

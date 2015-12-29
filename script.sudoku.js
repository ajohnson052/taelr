$(document).ready(function(){
  $("#getSudoku").click(function(){
    $("body").append("<table id='board'></table>");
    makeBoard();
    var array = makeArray();
    assignValues(array);
  })



  var makeBoard = function(){
    for(var i=0; i<9; i++){
      $("#board").append("<tr class = r"+i+"></tr>");
      for(var j=0; j<9; j++){
        $(".r"+i).append("<td id = " +i+j+"></td>");
      }
    }
    $("td").each(function(){
      $(this).html("<input type='text' />")
    })
  }

  var makeRow = function(){
    var row = []
    var j=0
    while(j<9){
      var num = Math.ceil(Math.random()*9)
      if(row.indexOf(num) === -1){
        row[j] = num
        j++
      }
    }
    return row
  }

  var makeArray = function(){
    var array = []
    addRows:
      while(array.length<9){
        var row = makeRow()
        for(var i=0; i<array.length; i++){
          for(var j=0; j<9; j++){
            if(array[i][j] === row[j]){
              continue addRows;
            }
          }
        }
        array.push(row)
      }
    return array;
  }

  var assignValues = function(data){
    for(i=0; i<9; i++){
      d3.select(".r" + i)
        .selectAll("td")
        .data(data[i])
        .text(function(d){
          return d;
        })
    }

  }
})

$(document).ready(function(){
  $("#getSudoku").click(function(){
    $("body").append("<table id='board'></table>")
    makeBoard()
    makeArray()
  })



  var makeBoard = function(){
    for(var i=0; i<9; i++){
      $("#board").append("<tr class = r"+i+"></tr>");
      for(var j=0; j<9; j++){
        $(".r"+i).append("<td id = " +i+j+"></td>");
      }
    }
    $("td").each(function(){
      $(this).css("background-color", "white");
      $(this).css("height", "5vh");
      $(this).css("width", "5vh")
      $(this).css("padding", "1vh")
    })
  }

  var makeArray = function(){
    var array = []
    for(var i=0; i<9; i++){
      array[i] = []
      var j=0
      while(j<9){
        var num = Math.ceil(Math.random()*9)
        if(array[i].indexOf(num) === -1){
          array[i][j] = num
          j++
        }
      }
    }
    console.log(array)
  }
})

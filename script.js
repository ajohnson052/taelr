$(document).ready(function(){

  var imageIndex = 0;
  var doges = []
  
  var getDoges = function(){
    $.getJSON("https://api.unsplash.com/photos/search?client_id=28ab92b0a76bc92b6e43807c2e5456aca925f50b4148ec19afa5f64261fa7821&query=dog").done(function(response){
      doges = response;
      showDoge();
    }).fail(function(){
      console.log("failed request");
    });
  };

  var showDoge = function(){
    console.log(doges)
    var imageUrl = doges[imageIndex].urls.regular;
    $("#doge").empty().append($("<img src=" + imageUrl + ">"));
  };

  $("#getDoge").click(function(){
    $(".welcome").slideUp();
    $("body").css("background", "black");
    $("#getDoge").css("display", "none");
    $("#previous").css("display", "inline");
    $("#another").css("display", "inline");
    getDoges();
  });

  $("#another").click(function(){
    if(imageIndex < doges.length - 1){
      imageIndex += 1;
    }else{
      imageIndex = 0;
    };
    showDoge();
  });

  $("#previous").click(function(){
    if(imageIndex>0){
      imageIndex -= 1;
    }else{
      imageIndex = doges.length - 1;
    };
    showDoge();
  });



})

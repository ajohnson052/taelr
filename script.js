$(document).ready(function(){

  var imageIndex = 0

  $("#getDoge").click(function(){
    $(".welcome").slideUp();
    $("body").css("background", "black");
    $("#getDoge").css("display", "none");
    $("#previous").css("display", "inline");
    $("#another").css("display", "inline");
    $.getJSON("https://api.unsplash.com/photos/search?client_id=28ab92b0a76bc92b6e43807c2e5456aca925f50b4148ec19afa5f64261fa7821&query=dog").done(function(response){
      var imageUrl = response[imageIndex].urls.regular;
      $("#doge").empty().append($("<img src=" + imageUrl + ">"))
    }).fail(function(){
      console.log("failed request")
    })
  });

  $("#another").click(function(){
    $.getJSON("https://api.unsplash.com/photos/search?client_id=28ab92b0a76bc92b6e43807c2e5456aca925f50b4148ec19afa5f64261fa7821&query=dog").done(function(response){
      if(imageIndex < response.length - 1){
        imageIndex += 1;
      }else{
        imageIndex = 0;
      }
      var imageUrl = response[imageIndex].urls.regular;
      $("#doge").empty().append($("<img src=" + imageUrl + ">"));
    }).fail(function(){
      console.log("failed request")
    })
  });

  $("#previous").click(function(){
    $.getJSON("https://api.unsplash.com/photos/search?client_id=28ab92b0a76bc92b6e43807c2e5456aca925f50b4148ec19afa5f64261fa7821&query=dog").done(function(response){
      if(imageIndex>0){
        imageIndex -= 1;
        var imageUrl = response[imageIndex].urls.regular;
        $("#doge").empty().append($("<img src=" + imageUrl + ">"))
      }else{
        imageIndex = response.length - 1;
        var imageUrl = response[imageIndex].urls.regular;
        $("#doge").empty().append($("<img src=" + imageUrl + ">"))
      }
    }).fail(function(){
      console.log("failed request")
    })
  })



})

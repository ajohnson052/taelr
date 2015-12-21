$(document).ready(function(){

  var imageIndex = 0

  $("#getDoge").click(function(){
    $.getJSON("https://api.unsplash.com/photos/search?client_id=28ab92b0a76bc92b6e43807c2e5456aca925f50b4148ec19afa5f64261fa7821&query=dog").done(function(response){
      var imageUrl = response[imageIndex].urls.regular;
      $("#doge").empty().append($("<img src=" + imageUrl + ">"))
      if(imageIndex < response.length - 1){
        imageIndex += 1;
      }
      else{
        imageIndex = 0;
      }
    }).fail(function(){
      console.log("failed request")
    })
  });

})

$(".play").click(function() {
  var audio = $(".song-file")[0];;
  if (audio.paused) {
      $(this).text("Pause");
      audio.play();
  } else {
      $(this).text("Play");
      audio.pause();
  }
});

function goto(href){
  window.location.href = href;
}



$('.album').hover(function() {
  // code to be executed when mouse enters the album div
  $(this).find('.image2').stop()
  $(this).animate(250, function(){
    $(this).css("background-color", "rgb(220, 140, 212)");
  });
  $(this).find('.image2').animate({opacity: 0.75}, 250);
}, function() {
  // code to be executed when mouse leaves the album div
  $(this).find('.image2').stop()
  $(this).animate(250, function(){
    $(this).css("background-color", "rgb(207, 146, 222)");
  });
  $(this).find('.image2').animate({opacity: 0}, 250);
});

$(".album").click(function(){
  window.location.href = $(this).attr("redirect");
});


//plays song
var playing = 0;

function switch_song(audio){
  if(playing == 0){
    playing = audio;
  } else {
    playing.pause();
    playing.currentTime = 0;
    playing = audio;
  }
}

$(".play").click(function() {
  var audio = $(".song-file")[0];;
  if(playing != audio){
    switch_song(audio)
  }
  if (playing.paused) {
      $(this).text("Pause");
      playing.play();
  } else {
      $(this).text("Play");
      playing.pause();
  }
});




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
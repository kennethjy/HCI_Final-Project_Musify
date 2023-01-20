// get elements from the document
const artistImg = document.querySelector('.artist-img');
;

// transform image
artistImg.addEventListener('mouseenter', () => {
    artistImg.style.transform = 'scale(1.15)';
});

artistImg.addEventListener('mouseleave', () => {
    artistImg.style.transform = 'scale(1)';
});

// color change and show play button
$('.album, .song').hover(function() {
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

// redirect when user clicks album
$(".album").click(function(){
    window.location.href = $(this).attr("redirect");
});

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

$(".song").click(function() {
  var audio = $(this).find(".song-file")[0];
  if(playing != audio){
    switch_song(audio);
  }
  if (playing.paused) {
      playing.play();
  } else {
      playing.pause();
  }
});


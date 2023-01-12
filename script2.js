// Get elements from the DOM
const songList = document.querySelector('.song-list');
const albumList = document.querySelector('.album-list');
const artistImg = document.querySelector('.artist-img');
const artistName = document.querySelector('.artist-name');
const artistBio = document.querySelector('.bio');

// Add event listeners
artistImg.addEventListener('mouseenter', () => {
    artistImg.style.transform = 'scale(1.15)';
});

artistImg.addEventListener('mouseleave', () => {
    artistImg.style.transform = 'scale(1)';
});

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

$(".album").click(function(){
    window.location.href = $(this).attr("redirect");
});

$(".song").click(function() {
  var audio = $(this).find(".song-file")[0];
  if (audio.paused) {
      audio.play();
  } else {
      audio.pause();
  }
});


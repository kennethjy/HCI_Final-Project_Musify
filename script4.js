// Play a song when the play button is clicked
const playButtons = document.querySelectorAll('.track-list button:first-of-type');
playButtons.forEach(button => {
  button.addEventListener('click', event => {
    const songTitle = event.target.previousElementSibling.textContent;
    console.log(`Playing "${songTitle}"`);
    // Replace this with your own code to play the song
  });
});

// Add a song to the playlist when the add to playlist button is clicked
const addButtons = document.querySelectorAll('.track-list button:last-of-type');
addButtons.forEach(button => {
  button.addEventListener('click', event => {
    const songTitle = event.target.previousElementSibling.previousElementSibling.textContent;
    console.log(`Adding "${songTitle}" to the playlist`);
    // Replace this with your own code to add the song to the playlist
  });
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
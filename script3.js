// toggle play/pause button for banner video
var bannerVideo = document.querySelector('.banner video');
var playPauseButton = document.querySelector('.play-pause-button');

playPauseButton.addEventListener('click', function() {
  if (bannerVideo.paused) {
    bannerVideo.play();
    playPauseButton.textContent = 'Pause';
  } else {
    bannerVideo.pause();
    playPauseButton.textContent = 'Play';
  }
});

// add active class to currently playing song
var songList = document.querySelector('.artist-releases ul');

songList.addEventListener('click', function(event) {
  var currentSong = document.querySelector('.current-song');
  if (currentSong) {
    currentSong.classList.remove('current-song');
  }
  event.target.classList.add('current-song');
});

// show tour dates for selected city
var tourCitySelect = document.querySelector('.tour-city-select');
var tourDatesList = document.querySelector('.tour-dates ul');

tourCitySelect.addEventListener('change', function() {
  var selectedCity = tourCitySelect.value;
  for (var i = 0; i < tourDatesList.children.length; i++) {
    var tourDate = tourDatesList.children[i];
    if (tourDate.dataset.city === selectedCity) {
      tourDate.style.display = 'block';
    } else {
      tourDate.style.display = 'none';
    }
  }
});

const start1 = document.getElementById("song-start1");
const audio1 = document.getElementById("audio1");

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

start1.addEventListener("click", function() {
  if(playing != audio1) {
    switch_song(audio1);
  }
  if(playing.paused){
    playing.play();
  } 
  else {
    playing.pause();
  }
});

const start2 = document.getElementById("song-start2");
const audio2 = document.getElementById("audio2");
    
start2.addEventListener("click", function() {
  if(playing != audio2){
    switch_song(audio2);
  }
  if(playing.paused){
    playing.play();
  }
  else {
    playing.pause();
  }
});

const start3 = document.getElementById("song-start3");
const audio3 = document.getElementById("audio3");
    
start3.addEventListener("click", function() {
  if(playing != audio3){
    switch_song(audio3);
  }
  if(playing.paused){
    playing.play();
  }
  else {
    playing.pause();
  }
});
  
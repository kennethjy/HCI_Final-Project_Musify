const start1 = document.getElementById("song-start1");
const audio1 = document.getElementById("audio1");
    
start1.addEventListener("click", function() {
  if(audio1.paused){
    audio1.play();
    start1.innerHTML = "Pause";
  } else {
    audio1.pause();
    start1.innerHTML = "Play";
  }
});

const start2 = document.getElementById("song-start2");
const audio2 = document.getElementById("audio2");
    
start2.addEventListener("click", function() {
  if(audio2.paused){
    audio2.play();
    start2.innerHTML = "Pause";
  } else {
    audio2.pause();
    start2.innerHTML = "Play";
  }
});

const start3 = document.getElementById("song-start3");
const audio3 = document.getElementById("audio3");
    
start3.addEventListener("click", function() {
  if(audio3.paused){
    audio3.play();
    start3.innerHTML = "Pause";
  } else {
    audio3.pause();
    start3.innerHTML = "Play";
  }
});
  
document.addEventListener("DOMContentLoaded", function() {
    // Search form submission
    const searchForm = document.querySelector("header form");
    searchForm.addEventListener("submit", function(event) {
      window.location.href = "#"
      event.preventDefault();
      const searchTerm = this.querySelector("input[type='text']").value;
      searchSongs(searchTerm);
    });
  
    // Navigation menu item clicks
    const navLinks = document.querySelectorAll("header nav ul li a");
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const genre = this.textContent;
        getSongsByGenre(genre);
      });
    });
  
    // Featured song clicks
    const songCards = document.querySelectorAll("main ul li");
    songCards.forEach(function(card) {
      card.addEventListener("click", function() {
        const songId = this.dataset.songId;
        playSong(songId);
      });
    });
  });
  
  function searchSongs(term) {
    // Make an AJAX call to the server to search for songs
    console.log(`Searching for songs with term: ${term}`);
  }
  
  function getSongsByGenre(genre) {
    // Make an AJAX call to the server to get songs by genre
    console.log(`Getting songs in genre: ${genre}`);
  }
  
  function playSong(id) {
    // Make an AJAX call to the server to play a song
    console.log(`Playing song with id: ${id}`);
  }
  
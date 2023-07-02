document.addEventListener('DOMContentLoaded', function() {
    var jokeContainer = document.getElementById('jokeContainer');
    var newJokeButton = document.getElementById('newJokeButton');
  
    // Fetch a random joke from the API
    function fetchJoke() {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          var joke = data.value;
  
          // Display the joke
          jokeContainer.textContent = joke;
        })
        .catch(function(error) {
          console.error('Error fetching Chuck Norris joke:', error);
        });
    }
  
    // Fetch a random joke on page load
    fetchJoke();
  
    // Fetch a new joke when the button is clicked
    newJokeButton.addEventListener('click', fetchJoke);
  });
  
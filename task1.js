document.addEventListener('DOMContentLoaded', function() {
    var catFactsContainer = document.getElementById('factid');
  
    // Fetch cat facts from the API
    fetch('https://cat-fact.herokuapp.com/facts')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(function(data) {
        var factid = data;
  
        // Display the cat facts
        factid.forEach(function(fact) {
          var factElement = document.createElement('div');
          factElement.className = 'card border-primary mx-4 my-4 ';
  
          var factBodyElement = document.createElement('div');
          factBodyElement.className = 'card-body';
  
          var factTextElement = document.createElement('p');
          factTextElement.className = 'card-text';
          factTextElement.textContent = fact.text;
  
          factBodyElement.appendChild(factTextElement);
          factElement.appendChild(factBodyElement);
          catFactsContainer.appendChild(factElement);
        });
      })
      .catch(function(error) {
        console.error('Error fetching cat facts:', error);
      });
  });
  
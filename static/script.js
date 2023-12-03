// Add an event listener for input changes
document.getElementById('job-search').addEventListener('input', function() {
    // Get the search query from the input field
    const searchQuery = this.value;
    // Fetch suggestions from the server based on the search query
    fetch(`/api/suggestions?query=${searchQuery}`)
      .then(response => response.json())
      .then(suggestions => {
        // Update the UI with the suggestions
        updateSuggestionsUI(suggestions);
      })
      .catch(error => {
        console.error('Error fetching suggestions:', error);
      });
  });
  
  function updateSuggestionsUI(suggestions) {
    // Update the UI to display the suggestions
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = '';
  
    if (suggestions.length === 0) {
      suggestionsContainer.style.display = 'none'; // hide the container if no suggestions
      return;
    }
  
    suggestionsContainer.style.display = 'block';
  
    // Create and append suggestion items to the container
    suggestions.forEach(suggestion => {
      const suggestionItem = document.createElement('div');
      suggestionItem.textContent = suggestion;
      suggestionItem.addEventListener('click', function() {
        // Set the selected suggestion as the search query
        document.getElementById('job-search').value = suggestion;
        // Hide the suggestions container
        suggestionsContainer.style.display = 'none';
        // Trigger the search function
        searchJobs();
      });
      suggestionsContainer.appendChild(suggestionItem);
    });
  }
// Mock data of games (name and basic information)
const games = [
    { name: "Game 1", info: "Description of Game 1" },
    { name: "Game 2", info: "Description of Game 2" },
    // Add more games here...
  ];
  
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  searchInput.addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    const matchingGames = games.filter(game => game.name.toLowerCase().includes(searchText));
    
    displayResults(matchingGames);
  });
  
  function displayResults(matchingGames) {
    if (matchingGames.length > 0) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'block';
      matchingGames.forEach(game => {
        const resultItem = document.createElement('a');
        resultItem.href = '#'; // Add the URL of the game if available
        resultItem.textContent = game.name + ' - ' + game.info;
        searchResults.appendChild(resultItem);
      });
    } else {
      searchResults.style.display = 'none';
    }
  }
  
  document.addEventListener('click', function(e) {
    if (!searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.style.display = 'none';
    }
  });
  
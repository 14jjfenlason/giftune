// Global Variables
const apiKey = 'd875bf90b3msh5322d0212594c58p18188djsnf6a23b67e4d7';
const inputEl = document.querySelector(`input[type="search"]`);
const bandDescEl = document.getElementById(`artist-info`);
const songPlayerEl = document.getElementById(`song-info`);
const gifEl = document.getElementById(`gif-container`);

//Get Request from Spotify API
async function fetchData() {
    // Retrieve the current value of the input field
    const inputValue = document.querySelector('#search-label').value;
    if (!inputValue.trim()) return;
    // Update the API URLs to use the inputValue
    const spotifyUrl = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(inputValue)}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=OMm5QoLNupS7duNFWG1tVabVcz7RA6qw&q=${encodeURIComponent(inputValue)}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    try { 
        const spotifyResponse = await fetch(spotifyUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        });
        const spotifyData = await spotifyResponse.json();
        // Retrieves artist name from Spotify API and displays
        const artistName = spotifyData.artists.items[0].data.profile.name;
        const artistNameDiv = document.querySelectorAll('.artist-name'); 
        artistNameDiv.forEach(div => {
          div.textContent = 'Artist: ' + artistName;
        });
        // Retrieves album cover photo from Spotify API and displays
        const albumCover = spotifyData.albums.items[0].data.coverArt.sources[0].url;
        const albumCoverImg = document.createElement('img');
        albumCoverImg.src = albumCover;
        const albumCoverDiv = document.querySelector('.album-pic');
        albumCoverDiv.innerHTML = '';
        albumCoverDiv.appendChild(albumCoverImg);
        // Retrieves most popular song name from Spotify API and displays
        const songName = spotifyData.tracks.items[0].data.name;
        const songNameDiv = document.querySelector('.song-name');
        songNameDiv.textContent = 'Song: ' + songName;
        // Retrieves top GIF from user input from GIPHY API and displays
        const giphyResponse = await fetch(giphyUrl);
        const giphyData = await giphyResponse.json();
        const gifImage = giphyData.data[0].images.fixed_height.url;
        const gifImg = document.createElement('img');
        gifImg.src = gifImage;
        const gifImageDiv = document.querySelector('.gif-image');
       
        gifImageDiv.innerHTML = '';
        gifImageDiv.appendChild(gifImg);


        saveSearch(inputValue);
        displaySearches();
    } catch (error) {
        console.error('Error Fetching Data:', error);
    }
}
//LOCAL STORAGE LOGIC//
function saveSearch(searchTerm) {
    let searches = localStorage.getItem('searches');

    searches = searches ? JSON.parse(searches) : [];
    searchTerm = searchTerm.toLowerCase().trim();

    // Check if the searchTerm is not already in the array to prevent duplicates
    if (!searches.includes(searchTerm)) {
        searches.push(searchTerm);
        localStorage.setItem('searches', JSON.stringify(searches));
    }
}

//DISPLAY LOCAL STORAGE LOGIC
function displaySearches() {
    let searches = localStorage.getItem('searches');
    searches = searches ? JSON.parse(searches) : [];
    const quickSearchContainer = document.querySelector('.quick-search');
    quickSearchContainer.innerHTML = ''; // Clear previous content
    
    searches.forEach(search => {
        const searchElement = document.createElement('p');
        searchElement.className = 'card-text';
        searchElement.textContent = search;
        searchElement.addEventListener('click', () => {
            document.getElementById('search-label').value = search;
            fetchData();  // Execute the search again without saving
        });
        quickSearchContainer.appendChild(searchElement);
    });
}

function reExecuteSearch(searchTerm) {
    document.getElementById('search-label').value = searchTerm;
    fetchData();
}

document.addEventListener('DOMContentLoaded', function() {
    // Initializes modals using Materialize
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems);

    // Sets up the event listener for the search button to open the modal
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', function() {
        const modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.open();   
    });

    // Sets up the event listener for the button inside the modal to fetch data and close the modal
    const searchModalBtn = document.querySelector('.modal .modal-content button');
    searchModalBtn.addEventListener('click', function() {
        fetchData();  // Fetch data when clicking the "Search" button inside the modal
        const modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
    });

    // Sets up the event listener for the search input to fetch data when the Enter key is pressed
    const searchInput = document.getElementById('search-label');
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            fetchData();  // Fetch data when pressing Enter in the input field
            const modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
            modalInstance.close();
        }
    });
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~GLOBAL VARIABLES~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const apiKey = 'd875bf90b3msh5322d0212594c58p18188djsnf6a23b67e4d7'
const inputEl = document.querySelector(`input[type="search"]`);
const bandDescEl = document.getElementById(`artist-info`);
const songPlayerEl = document.getElementById(`song-info`);
const gifEl = document.getElementById(`gif-container`);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// ~~~~~FUNCTIONS~~~~~//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//Get Request from Spotify API
// GET Request
async function fetchData() {
    // Retrieve the current value of the input field
    const inputValue = document.querySelector('#search-label').value;

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
        console.log('Spotify Data:', spotifyData);

        const artistName = spotifyData.artists.items[0].data.profile.name;
        const artistNameDiv = document.querySelectorAll('.artist-name'); 
        artistNameDiv.forEach(div => {
          div.textContent = 'Artist: ' + artistName;
        });

        const albumCover = spotifyData.albums.items[0].data.coverArt.sources[0].url;
        const albumCoverImg = document.createElement('img');
        albumCoverImg.src = albumCover;
        const albumCoverDiv = document.querySelector('.album-pic');
        albumCoverDiv.innerHTML = '';
        albumCoverDiv.appendChild(albumCoverImg);

        const songName = spotifyData.tracks.items[0].data.name;
        const songNameDiv = document.querySelector('.song-name');
        songNameDiv.textContent = 'Song: ' + songName;
        
        const giphyResponse = await fetch(giphyUrl);
        const giphyData = await giphyResponse.json();
        console.log('Giphy Data:', giphyData);

        const gifImage = giphyData.data[0].images.fixed_height.url;
        const gifImg = document.createElement('img');
        gifImg.src = gifImage;
        const gifImageDiv = document.querySelector('.gif-image');
        gifImageDiv.innerHTML = '';
        gifImageDiv.appendChild(gifImg);

    } catch (error) {
        console.error('Error Fetching Data:', error);
    }
}

function updateSearchResults(artist, song, album) {
    console.log(artist, album, song)
    // Get the elements by their new IDs
    const artistNameDisplay = document.getElementById('artist-name');
    const albumNameDisplay = document.getElementById('album-pic');
    const songNameDisplay = document.getElementById('song-name');

    // Set the text content
    if (artistNameDisplay) artistNameDisplay.textContent = `Artist name: ${artist}`;
    if (albumNameDisplay) albumNameDisplay.innerHTML = `Album: <img src =${album}>`;
    if (songNameDisplay) songNameDisplay.textContent = `Song: ${song}`;
}
//LOCAL STORAGE LOGIC//
//save search history
//parse and display searchs from localstorage array
function saveSearch(searchTerm) {
    let searches = localStorage.getItem('searches');
    if (searches) {
        searches = JSON.parse(searches);
    } else {
        searches =[]; 
    }
    //Adding search term value to array
    //then save to localstorage array and update
    searches.push(searchTerm);
    localStorage.setItem('searches', JSON.stringify(searches));
}
//DISPLAY LOCAL STORAGE LOGIC
function displaySearches() {
    let searches = localStorage.getItem('searches');
    if (searches) {
        searches = JSON.parse(searches);
        console.log('searches', searches); // LOG
    } else {
        searches = [];
    }
// DISPLAY HTML ELEMENTS LOGIC from localstorage
     const quickSearchContainer = document.querySelector('.quick-search');
     //CLEAR view first
     quickSearchContainer.innerHTML = '';
     const quickSearchEle = `
     <p class="card-text">${searches}</p>
     `;
     quickSearchContainer.innerHTML = quickSearchEle
     return displaySearches
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// ~~~~~EVENT LISTENER~~~~~//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
document.getElementById('submit-search-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const inputValue = document.querySelector('#search-label').value;
    fetchData();
    saveSearch(inputValue);
    displaySearches();
});

inputEl.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
      fetchData();  
      const modalInstance = M.Modal.getInstance(document.querySelector('.modal'));
        modalInstance.close();
  }
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// ~~~~~INVOKES~~~~~//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// ~~~~~ON PAGE LOAD~~~~~ //
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems);
    displaySearches();
 });

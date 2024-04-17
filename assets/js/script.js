
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

// GET Request
//Get Request from Spotify API
// GET Request
async function fetchData() {
    // Retrieve the current value of the input field
    const inputValue = document.querySelector('#search-label').value;

    // Update the API URLs to use the inputValue
    const spotifyUrl = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(inputValue)}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
   // const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=OMm5QoLNupS7duNFWG1tVabVcz7RA6qw&q=${encodeURIComponent(inputValue)}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    try { 
        const spotifyResponse = await fetch(spotifyUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        });

        if (!spotifyResponse.ok) throw new error('Response from API Spotify not ok');

        const spotifyData = await spotifyResponse.json();
        console.log('Spotify Data:', spotifyData);

        const artist =spotifyData.artists.items[0].data.profile.name;
        const song =spotifyData.tracks.items[0].data.name;
        const album =spotifyData.albums.items[0].data.coverArt.sources[0].url;
     
        //const giphyResponse = await fetch(giphyUrl);
       // const giphyData = await giphyResponse.json();
       // console.log('Giphy Data:', giphyData);
       updateSearchResults(artist,song,album)


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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// ~~~~~EVENT LISTENER~~~~~//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
document.getElementById('submit-search-btn').addEventListener('click', fetchData);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// ~~~~~INVOKES~~~~~//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.modal');
    const instances = M.Modal.init(elems);
  });

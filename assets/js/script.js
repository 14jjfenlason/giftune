//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~GLOBAL VARIABLES~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const apiKey = '876e6e0775mshb953066e68a70cbp160a47jsnc895403777bb';
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

        const giphyResponse = await fetch(giphyUrl);
        const giphyData = await giphyResponse.json();
        console.log('Giphy Data:', giphyData);
    } catch (error) {
        console.error('Error Fetching Data:', error);
    }
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
    localStorage.setIteme('searches', JSON.stringify(searches));
}
//DISPLAY LOCAL STORAGE LOGIC
function displaySearches() {
    let searches = localStorage.getItem('searches');
    if (searches) {
        searches = JSON.parse(searches);
    } else {
        searches = [];
    }
// DISPLAY HTML ELEMENTS LOGIC from localstorage
       
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
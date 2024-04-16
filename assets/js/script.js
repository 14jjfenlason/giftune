//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~GLOBAL VARIABLES~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const apiKey = '876e6e0775mshb953066e68a70cbp160a47jsnc895403777bb';
const input = document.querySelector(`artist-search-label`);
const bandDescEl = document.getElementById(``);
const songPlayerEl = document.getElementById(``);
const gifEl = document.getElementById(``);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// ~~~~~FUNCTIONS~~~~~//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// GET Request
//Get Request from Spotify API
const spotifyUrl = 'https://spotify23.p.rapidapi.com/search/?q=&type=multi&offset=0&limit=10&numberOfTopResults=5';
const spotifyOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '876e6e0775mshb953066e68a70cbp160a47jsnc895403777bb',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};
const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=OMm5QoLNupS7duNFWG1tVabVcz7RA6qw&q=red+hot+chili+peppers&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips';

async function fetchData() {
    try { // Fetch Data from Spotify API
        const spotifyResponse = await fetch(spotifyUrl, spotifyOptions);
        const spotifyData = await spotifyResponse.json();
        console.log(`Spotify Data:`, spotifyData);

        const giphyResponse = await fetch(giphyUrl);
        const giphyData = await giphyResponse.json();
        console.log('Giphy Data:', giphyData);
    } catch (error) {
        console.error('Error Fetching Data:', error);
    }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// ~~~~~INVOKES~~~~~//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

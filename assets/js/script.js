// ID assignments
const artistInfo = document.getElementById('artist-info');
const searchButton = document.getElementById('search-btn');
const modal = document.querySelector('.modal');
const songInfo = document.querySelector('.song-info');
const gifContainer = document.querySelector('.gif-container');

const apiKey = 'd875bf90b3msh5322d0212594c58p18188djsnf6a23b67e4d7';

// Function for searching
async function handleSearch() {
    const artistSearchInput = document.getElementById('artist-search-label').value.trim();
    const songSearchInput = document.getElementById('song-search-label').value.trim();
    const searchQuery = `${artistSearchInput} ${songSearchInput}`;
    
    try {
        const data = await fetchData(searchQuery);
        console.log('Data from Spotify API:', data); // Log the data received from the Spotify API
        displaySearchResults(data); 
    } catch(error) {
        console.error('Fetching data failed:', error);
        // Handle error
    }
}

// Function for fetching API data
async function fetchData(searchQuery) {
    console.log('Fetching data...'); 
    const spotifyApi = `https://spotify23.p.rapidapi.com/search?q=${encodeURIComponent(searchQuery)}&type=multi&offset=0&limit=10&numberOfTopResults=5`;

    const keys = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd875bf90b3msh5322d0212594c58p18188djsnf6a23b67e4d7',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(spotifyApi, keys);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data);
        return data;
    } catch(error) {
        console.error('Error fetching data:', error);
        throw new Error('Error fetching data:', error);
    }
}

// for display function results 

function displaySearchResults(data) {

    if (data.artists && data.artists.items.length > 0) {
        const artist = data.artists.items[0];
        artistInfo.textContent = `Artist name: ${artist.name}`;
    } else {
        artistInfo.textContent = "Content not found";
    }

    if (data.songInfo && data.songInfo.items.length > 0) {
        const song = data.songInfo.items[0];
        // Clear previous content
        songInfo.innerHTML = '';

        // elements for the song name and album
        const songNameDiv = document.createElement('div');
        songNameDiv.textContent = `Song: ${song.name}`;
        songInfo.appendChild(songNameDiv);

        const albumNameDiv = document.createElement('div');
        if (song.album && song.album.name) {
            albumNameDiv.textContent = `By: ${song.album.name}`;
        } else {
            albumNameDiv.textContent = `Album information not available`;
        }
        songInfo.appendChild(albumNameDiv);
    } else {
        songInfo.textContent = "Song not found.";
    }
}

// Event listener for search button
searchButton.addEventListener('click', handleSearch);

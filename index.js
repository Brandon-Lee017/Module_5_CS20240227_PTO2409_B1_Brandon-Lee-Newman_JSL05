// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "drowning", artist: "Juno Roome", genre: "Thai Indie"},
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Daisy", artist: "Delorians", genre: "Pop" },
    { title: "what's True?", artist: "Sweet93", genre: "Alternative/Indie" },
    { title: "French Movie", artist: "BUBBLE TEA & CIGARETTES", genre: "Alternative/Indie" },
    { title: "Loveisheroin", artist: "Chezile", genre: "Alternative/Indie" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "drax": "Thai Indie",
    "Rocket": "R&B",
    "groot": "Alternative/Indie",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {

    const playlistsdiv = document.getElementById("playlists")

    playlistsdiv.innerHTML("");

    // Use the map() function to create playlists for each Guardian
    Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];

        const filteredsongs = songs.filter( song => song.genre === preferredGenre );
     // Create a new div element for the Guardian's playlist

        const playlistsContainer = document.createElement("div");
        playlistsContainer.className = "playlist";

        playlistsdiv.innerHTML = `${guardian}'s Playlist>${playlist}`;

    // Add songs to the playlist
    filteredsongs.forEach(element => {
        const songDiv = document.getElement("div")
        songDiv.className = "song";

        const songTitle = document.getElement("span")
        songTitle.className = songs-title;
        songTitle.textContent = "song.title"

        const songArtist = document.createElement("span");
        songArtist.textContent = `by ${songs.artist}`;

        playlistsContainer.appendChild(songs)
     });


    });

}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);



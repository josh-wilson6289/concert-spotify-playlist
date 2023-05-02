import axios from 'axios';

// const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
// const REDIRECT_URI = 'http://localhost:3000/createPlaylist'
// const AUTH_ENDPOINT = 'http://accounts.spotify.com/authorize'
// const RESPONSE_TYPE = 'token

export default {

  getUser: async function() {
  console.log("click");
  const URL = 'https://joshwilsoncorsanywhere.herokuapp.com/https://accounts.spotify.com/authorize?client_id=cbe1cb5e313c4b2c9ea931248714a358&scope=playlist-modify-private&redirect_uri=http://localhost:3000/createPlaylist&response_type=token'
  let response = axios({
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?client_id=cbe1cb5e313c4b2c9ea931248714a358&scope=playlist-modify-private&redirect_uri=http://localhost:3000/createPlaylist&response_type=token',
  })
  return response;
  },
  createPlaylist: function (userID, token) {
    return axios({
      method: 'post',
      url: `https://api.spotify.com/v1/users/${userID}/playlists`,
      headers: {
        'Authorization': `Bearer ${token}`
     },
     data: {
      "name": "New Playlist",
      "description": "New playlist description",
      "public": false
  }
    });
  },
}

// create a new playlist (using the user ID).  give the name, description, and public in the request body.  

// Get new playlist ID.

// map through artist array and search spotify api for each artist, creating a new array or spotify IDs

// map through spotify IDs array and get each artist's top track (as a spotify URI).  Creates a new array of Spotify URIs.

// put each URI in the request body (max 100 at a time) to add to the user's playlist ID.



import axios from 'axios';
// use axios.all to chain all axios requests!!!

const createSpotifyPlaylist = async (spotifyID, token, artistList) => {

  const newPlaylist = async (spotifyID, token) => {
  const URL = `https://api.spotify.com/v1/users/${spotifyID}/playlists`
  let date = new Date;
  date = date.toDateString().split(' ');
  date[2] = date[2] + ',';
  date = date.slice(1).join(' ')
  const response = await axios({
    method: 'post',
    url: URL,
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      name: `Weekly SetList - ${date}`,
      description: "text",
      public: false
    }
  })
}
  newPlaylist(spotifyID, token)
}

export default createSpotifyPlaylist;
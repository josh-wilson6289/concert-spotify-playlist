import axios from 'axios';
// use axios.all to chain all axios requests!!!

const formatArtists = async (concerts, token) => {

  const getArtists = async (concerts) => {
    let artistList = [];
    concerts.map((concert) => {
      concert.performers.map(async (artist) => {
        let result = await getArtistId(artist.name);
        artistList.push(result);
      })
    })
    await getTopTracks(artistList, token);
  }

  const getArtistId = async (name) => {
    const URL = `https://api.spotify.com/v1/search?q=${name}&type=artist&limit=1&offset=0`
    let response = await axios ({
      method: 'get',
      url: URL,
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    let artist = {id: response.data.artists.items[0].id, name: name, popularity: response.data.artists.items[0].popularity};
    return artist;
  }
  
  const getTopTracks = async (artistList, token) => {
    console.log(artistList, token)
    // artistList.map(async (artist) => {
    //   const URL = `https://api.spotify.com/v1/artists/${artist.id}/top-tracks`
    //   let response = await axios({
    //     method: 'get',
    //     url: URL,
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     },
    //   });
    // });
  
  }
  getArtists(concerts)

}

export default formatArtists;
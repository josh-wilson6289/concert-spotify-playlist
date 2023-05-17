import React from 'react';
import { signOut } from 'next-auth/react'
import Spinner from './Spinner';
import Image from 'next/image';
import spotifyLogo from "../images/Spotify_Icon_Green.png"

const PlaylistStatus = ({ playlistIsLoading, spotifyRes, spotifyPlaylistURL }) => {

  let status;

  if (spotifyRes=== 201) {
    status = 
    <a href={spotifyPlaylistURL} target="_blank">
      <h2>Playlist Created!</h2>
      <div className="flex items-center justify-center text-xl">
      <h3>Click to listen</h3>
      <br></br>
      <Image className="spotify-icon flext items-center justify-center" src={spotifyLogo} alt="spotify logo" width={30} height={40}></Image>
      </div>
    </a>
  } else if (spotifyRes === undefined) {
    status = <h2>Creating playlist</h2>;
  } else if (status === 401) {
    status = <h2>Sorry, session has expired. Please log back in</h2>
    signOut();
  } else if (status === 429) {
    status = <h2>Sorry, we're experiencing a lot of traffic.  Please try again later</h2>
  } else {
    status = <h2>Sorry, something went wrong</h2>;
  }

  return (
  <div className="flex items-center justify-center text-4xl mt-10 p-1 lg:flex-1 text-white text-center">  
  {playlistIsLoading == true&& <Spinner />}
  {status}
  </div>
     
  )
}

export default PlaylistStatus;
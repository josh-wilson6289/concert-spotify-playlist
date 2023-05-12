import React from 'react';
import { useState } from 'react'
import { signOut } from 'next-auth/react'
import Spinner from './Spinner';

const PlaylistStatus = ({ status }) => {
  let spinner = false;
  if (status === 201) {
    status = "Playlist Created"
  } else if (status === undefined) {
    status = "Creating playlist"
    spinner = true;
  } else if (status === 401) {
    status = "Sorry, session has expired. Please log back in"
    signOut();
  } else if (status === 429) {
    status = "Sorry, we're experiencing a lot of traffic.  Please try again later"
  } else {
    status = "Sorry, something went wrong";
  }

  return (
  <div className="playlist-status">  
  {spinner==true&& <Spinner />}
  <h2 className="text-4xl lg:flex-1 text-white text-center">{status}</h2>
  </div>
     
  )
}

export default PlaylistStatus;
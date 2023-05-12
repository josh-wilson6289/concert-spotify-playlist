import React from 'react';
import headphones from '../images/headphones.png';
import Image from 'next/image';
import spotifyLogo from '../images/Spotify_Icon_White.png'
import {useSession, signIn, signOut} from 'next-auth/react'

export default function Navigation({ handleClick, login }) {
  const {data: session} = useSession();

  return (
     
        <nav className="navbar flex items-center justify-between p-6 lg:px-8 absolute inset-x-0 top-0" aria-label="Global">
          <div className="logo flex text-4xl lg:flex-1" onClick={handleClick}> 
            <a className="-m-1.5 p-1.5 text-30px text-white">
            <Image className="logo-image" src={headphones} alt="headphones logo" width={40} height={40} />
              <span>SetList</span>
            </a>
          </div>

          {session?
          <div className="signout -m-1.5 p-1.5 text-30px text-white" onClick={signOut}>
            <Image className="spotify-icon" src={spotifyLogo} alt="spotify logo" width={30} height={30}></Image>Sign Out</div>
          :
          <div className="signin -m-1.5 p-1.5 text-30px text-white" onClick={signIn}>
            <Image className="spotify-icon" src={spotifyLogo} alt="spotify logo" width={30} height={30}></Image>Sign In</div>}
        </nav>

  );
}


import React from 'react';
import headphones from '../images/headphones.png';
import Image from 'next/image';
import {useSession, signIn, signOut} from 'next-auth/react'

export default function Navigation({ handleClick }) {
  const {data: session} = useSession();

  return (
     
        <nav className="navbar flex items-center justify-between p-6 lg:px-8 absolute inset-x-0 top-0" aria-label="Global">
          <div className="flex text-4xl lg:flex-1" onClick={handleClick}> 
            <a className="-m-1.5 p-1.5 text-30px text-white">
            <Image className="logo" src={headphones} alt="headphones logo" width={40} height={40} />
              <span>Weekly SetList</span>
            </a>
          </div> 
          {session&&
          <div className="-m-1.5 p-1.5 text-30px text-white" onClick={signOut}>Sign Out</div>
          }
        </nav>

  );
}


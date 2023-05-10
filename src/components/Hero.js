import Image from 'next/image';
import SpotifyLogo from '../images/Spotify_Logo_Green.png'
import Link from 'next/link'
import {useSession, signIn, signOut} from 'next-auth/react'
import ZipInput from './ZipInput';

export default function Hero ({ onSubmit }) {
  const {data: session} = useSession();

  const login = () => {
      signIn()
  }
  
  if (!session) return (

    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Create a custom playlist of all artists coming to your town this week!
        </h1>
        <p className="mt-4 text-lg leading-8 text-gold">
          Link your Spotify account to begin.
        </p>
        <div className="mt-4 flex items-center justify-center">
        <a className="spotify-login" onClick={login}><span>
            <Image src={SpotifyLogo} alt="Login to Spotify" width={150} height={100} />
          </span></a>
        </div>
      </div>
    </div>
  );

  if (session) return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Enter your zipcode to create your playlist
        </h1>
        <div className="mt-4 flex items-center justify-center">
        <ZipInput onSubmit={onSubmit} spotifyID={session.token.sub}/>
        </div>
      </div>
    </div> 
  )
};
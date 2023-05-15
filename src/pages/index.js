import Head from 'next/head';
import { addDays, addMonths } from 'date-fns';
import React from 'react';
import { useState, useEffect } from 'react';
import {useSession, signIn, signOut} from 'next-auth/react'
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import searchConcerts from './api/searchConcerts';
import ConcertList from '../components/ConcertList';
import createPlaylist from './api/createPlaylist';

export default function Home() {

const [currentDate, setCurrentDate] = useState('');
const [maxDate, setMaxDate] = useState('');
const [concerts, setConcerts] = useState([]);
const [playlistIsLoading, setPlaylistIsLoading] = useState(false);
const [spotifyRes, setSpotifyRes] = useState();
const [spotifyPlaylistURL, setSpotifyPlaylistURL] = useState('')

const {data: session} = useSession();

// immediately gets date for concert query
useEffect(() => {
  setSpotifyRes();
  let date = new Date;
  setCurrentDate(date.toISOString().split('T')[0]);
  setMaxDate(addDays(date, 8).toISOString().split('T')[0]);
},[])

console.log(spotifyRes)
// searches seatgeek api for concerts when zip code is submitted.  updates concerts state.
const handleZipSubmit = async (zip) => { 
  const result = await searchConcerts(currentDate, maxDate, zip);
  
  // removes comedy shows and all other types of events
  let filteredConcerts = result.filter((concert) => concert.type === 'concert');
  setConcerts(filteredConcerts);
  createPlaylist(filteredConcerts, session.token.accessToken, session.token.sub, setPlaylistIsLoading, setSpotifyRes, setSpotifyPlaylistURL);
}

// resets concerts to empty array (currently used if nav is clicked)
const handleClick = (e) => {
  setConcerts([]);
  setSpotifyRes();
}
return (
    <>
      <Head>
        <title>SetList</title>
        <meta name="Local SetList" content="A website that locates concerts in your area and creates a spotify playlist of all upcoming artists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
      <Navigation handleClick={handleClick}/>

      {concerts.length < 1 ? <Hero onSubmit={handleZipSubmit}/> :
      <ConcertList concerts={concerts} playlistIsLoading={playlistIsLoading} spotifyRes={spotifyRes} spotifyPlaylistURL={spotifyPlaylistURL}></ConcertList>
      }
      </main>
    </>
  )
}

import Head from 'next/head';
import { addWeeks, addMonths } from 'date-fns';
import React from 'react';
import { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import searchConcerts from './api/searchConcerts';
import ConcertList from '../components/ConcertList';

export default function Home() {

const [currentDate, setCurrentDate] = useState('');
const [maxDate, setMaxDate] = useState('');
const [concerts, setConcerts] = useState([]);


useEffect(() => {
  let date = new Date;
  setCurrentDate(date.toISOString().split('T')[0]);
  setMaxDate(addWeeks(date, 1).toISOString().split('T')[0]);
})

const handleSubmit = async (zip) => { 
  const result = await searchConcerts(currentDate, maxDate, zip);
  setConcerts(result);
}

const handleClick = (e) => {
  setConcerts([]);
}

  return (
    <>
      <Head>
        <title>SetList</title>
        <meta name="SetList" content="A website that locates concerts in your area and creates a spotify playlist of all upcoming artists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
      <Navigation handleClick={handleClick}/>
 
      {concerts.length < 1 ? 
      <Hero onSubmit={handleSubmit}/>
      :
      <ConcertList concerts={concerts}/>
      }
      </main>
    </>
  )
}

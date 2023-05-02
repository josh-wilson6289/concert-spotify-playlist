import React from 'react';
import { useState, useEffect } from 'react';
import createPlaylist from '../pages/api/spotify';
import spotify from '../pages/api/spotify';

const ConcertList = ({ concerts }) => {


  let filteredConcerts = concerts.filter((concert) => concert.type === 'concert');
  
  let artistList = []

  let artists = filteredConcerts.map((concert) => {
    concert.performers.map((artist) => {
      artistList.push({artist: artist.name});
    })
  })
  
  
  let renderedConcerts = filteredConcerts.map((concert) => {
    return (
      <li key={concert.id} className="flex justify-between gap-x-6 py-5">
      <div className="flex gap-x-4">
        <div className="min-w-0 flex-auto">
          <a href={concert.url} className="text-sm font-semibold leading-6 text-green">{concert.short_title}</a>
          <p className="mt-1 truncate text-xs leading-5 text-white">{concert.venue.name}</p>
        </div>
      </div>
      <div className="sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-white">{concert.datetime_local.split('T')[0].slice(5).replace(/-/g, "/")}</p>
          <div className="mt-1 flex items-center gap-x-1.5">
            <a href={concert.url} className="text-xs leading-5 text-white">Tickets</a>
          </div>
      </div>
    </li>
    )
  });

  return (
    <div>

  <button className="rounded-md bg-green mt-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:green" 
  type="button" onClick={spotify.getUser}>
      Create your playlist
    </button>

    <ul role="list" className="divide-y divide-gold">
      {renderedConcerts}
    </ul>
    </div>
  )
}

export default ConcertList;


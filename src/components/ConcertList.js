import React from 'react';

const ConcertList = ({ concerts }) => {
  let filteredConcerts = concerts.filter((concert) => concert.type === 'concert');
  console.log(filteredConcerts)
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
    <ul role="list" className="divide-y divide-gold">
      {renderedConcerts}
    </ul>
  )
}

export default ConcertList;


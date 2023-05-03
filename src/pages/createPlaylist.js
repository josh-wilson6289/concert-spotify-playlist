import axios from 'axios';
import spotify from './api/spotify'
import { useEffect, useState } from 'react'

export default function createPlaylist() {
const [userID, setUserID] = useState()
const [token, setToken] = useState('')

useEffect(() => {

async function userLogin() {
    let token = window.location.hash.slice(14);
    setToken(token)
    let headers = {
      'Authorization': `Bearer ${token}`
    };
  const response = await axios.get('https://api.spotify.com/v1/me', {headers})
  setUserID(response.data.id)
  console.log(spotify.createPlaylist(userID, token))
  }
  userLogin()
},[]); 


return (

<main className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
         Enjoy your SetList!
        </h1>

      </div>
    </div>
</main>
  )
}
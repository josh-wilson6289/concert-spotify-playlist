import axios from 'axios';

const searchConcerts = async (currentDate, maxDate, zip) => {
  const URL = `https://api.seatgeek.com/2/events?geoip=${zip}&datetime_local.gte=${currentDate}&datetime_local.lte=${maxDate}&taxonomies.name=concert&per_page=500&client_id=${process.env.NEXT_PUBLIC_SEATGEEK_KEY}`
  const response = await axios.get(URL)

  return response.data.events;
}



export default searchConcerts;
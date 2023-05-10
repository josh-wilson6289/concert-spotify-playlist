import axios from 'axios';
import '../../../.env.local'

const searchConcerts = async (currentDate, maxDate, zip) => {
  const seatgeekId = process.env.NEXT_PUBLIC_SEATGEEK_KEY;
  const URL = `https://api.seatgeek.com/2/events?geoip=${zip}&datetime_local.gte=${currentDate}&datetime_local.lte=${maxDate}&taxonomies.name=concert&per_page=500&client_id=${seatgeekId}`
  const response = await axios.get(URL)

  return response.data.events;
}



export default searchConcerts;
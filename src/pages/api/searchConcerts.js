import axios from 'axios';

const searchConcerts = async (currentDate, maxDate, zip) => {
  
  const response = await axios.get(`https://api.seatgeek.com/2/events?geoip=${zip}&datetime_local.gte=${currentDate}&datetime_local.lte=${maxDate}&taxonomies.name=concert&per_page=500&client_id=MjcwNTg1ODd8MTY4MDI3OTc0OC45MDY2NjY1`)

  return response.data.events;
}



export default searchConcerts;
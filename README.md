Sonic Showcase
Sonic Showcase is an innovative app that seamlessly creates a Spotify playlist featuring every band performing in the user's area within the next month. It leverages the powerful APIs of Seatgeek and Spotify to deliver a personalized concert experience like never before. This README file provides an overview of the app's features, authentication process, technologies used, instructions for setup, and a demo section.

Features
Seamless Playlist Creation: Sonic Showcase integrates with Seatgeek and Spotify's APIs to effortlessly curate a comprehensive Spotify playlist that includes every band scheduled to perform in the user's area within the next month.
Secure Authentication: Implemented a robust authentication process using Next-Auth, ensuring users can easily log in to their Spotify accounts and personalize their concert experience.
User-Friendly Interface: Built with React, Tailwind, and Next.js, Sonic Showcase offers an intuitive and visually appealing interface. Users can conveniently enter their zip code, retrieve concert data from the Seatgeek API, and browse upcoming concerts with ticket purchasing options.
Technologies Used
Next.js
React
Tailwind
Next-Auth
Node
Axios
Seatgeek API
Spotify API


Setup Instructions
To set up Sonic Showcase locally, follow these steps:

Clone the repository from GitHub: git clone https://github.com/your-username/sonic-showcase.git
Navigate to the project directory: cd sonic-showcase
Install the dependencies: npm install
Configure your API keys:
Obtain API keys for Seatgeek and Spotify.
Create a .env.local file in the root directory.
Add the following environment variables to the .env.local file:
makefile
Copy code
SEATGEEK_API_KEY=your-seatgeek-api-key
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
Start the development server: npm run dev
Open your browser and visit http://localhost:3000 to access Sonic Showcase.
Demo 🎥
Watch the demo video or GIF below to see Sonic Showcase in action:

Demo

https://github.com/josh-wilson6289/sonic-showcase/assets/68122047/2059e186-71af-4743-9cef-e11b7a05cb9d

Deployed Site 🌐
Check out the deployed site of Sonic Showcase at sonicshowcase.vercel.app.

Note: I am currently working with Spotify to enable access for a wider user base. If you would like access to the full deployed app, please email me at JoshWilsonDev28@gmail.com.

Please note that this setup assumes you have Node.js and npm installed on your machine.

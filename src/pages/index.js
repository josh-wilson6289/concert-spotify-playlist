import Head from 'next/head'
import { Inter } from 'next/font/google'
import LandingPage from './LandingPage';
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SetListPlay</title>
        <meta name="SetListPlay" content="A website that locates concerts in your area and creates a spotify playlist of all upcoming artists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingPage />

      </main>
    </>
  )
}

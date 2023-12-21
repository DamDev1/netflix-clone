import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import fetchAPI from '../Fetch'

export default function Home() {
  return (
    <>
        <Main/>
        <Row rowId="1" title="Popular on Netflix" fetchURL={fetchAPI.fetchUpComing}/>
        <Row rowId="2"  title="Trending" fetchURL={fetchAPI.fetchNowPlaying}/>
        <Row rowId="3"  title="Comedies" fetchURL={fetchAPI.fetchToRate}/>
        <Row rowId="4"  title="30-Minute Laughs" fetchURL={fetchAPI.fetchNowPlaying}/>
        <Row rowId="5" title="Action Movies" fetchURL={fetchAPI.fetchUpComing}/>
    </>
  )
}

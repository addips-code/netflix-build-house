import React from 'react'
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from '../Row';

function HomeScreen() {
  return ( 
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row 
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      
      <Row 
        title='Trending'
        fetchUrl={requests.fetchTrending}
      />

      <Row 
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
      />
      <Row 
        title='Documentries'
        fetchUrl={requests.fetchDocumentries}
      />

      <Row 
        title='Horro Movies'
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row 
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
      />

      <Row 
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}

export default HomeScreen         

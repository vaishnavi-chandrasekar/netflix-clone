import React from 'react';
import Rows from './Rows';
import './row.css';
import Banner from './Banner';
import './Banner.css';
import Nav from './Nav';
import './Nav.css';


const API_KEY="c0774d29ba2adff7cc79b02a1b6e5c5b";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated :`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}



function Mainpage(){
    return(
        <>
        <div className='Mainpage'>
            <Nav/>
        <Banner/>
        <div className='cards'>
            <Rows title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} ></Rows>
            <Rows title="Trending Now" fetchURL={requests.fetchTrending}></Rows>
            <Rows title="Top Rated" fetchURL={requests.fetchTopRated}></Rows>
            <Rows title="Action Movies" fetchURL={requests.fetchActionMovies}></Rows>
            <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Rows>
            <Rows title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Rows>
            <Rows title="Romanctic Movies" fetchURL={requests.fetchRomanceMovies}></Rows>
            <Rows title="Documentaries" fetchURL={requests.fetchDocumentaries}></Rows>
        </div>
        </div>
        </>
    )
}

export default Mainpage


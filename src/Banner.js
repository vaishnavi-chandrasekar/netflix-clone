import React,{useState,useEffect} from 'react';
import axios from './axios';


const API_KEY="c0774d29ba2adff7cc79b02a1b6e5c5b";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated :`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres_35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres_27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres_10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres_99`,
}


function Banner (){

    const [movie,setmovie]= useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovie(
            request.data.results[Math.floor(Math.random() * request.data.results.length-1)]
            );
            return request;

        }
        fetchData();
        },[])
        console.log(movie);

        function truncate(str,n){
            return str?.length > n ? str.substr(0,n-1)+"...":str;
        }


    return(
        <>
        <header className='banner'
                        style={{
                            backgroundSize:"cover",
                            backgroundImage:`url(
                                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                                backgroundPosition: "center center",
                        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>MyList</button>
                </div>
                <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1>

            </div>
            <div className=' banner--fadebutton'/>
                
            

        </header>
        </>
    )
}


export default Banner
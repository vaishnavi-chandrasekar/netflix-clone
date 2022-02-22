import React,{useState,useEffect} from'react';
import YouTube from 'react-youtube';
import axios from './axios';
import './row.css';
import movieTrailer from "movie-trailer"
// import Banner from './Banner';

const base_url="https://image.tmdb.org/t/p/original";

function Rows({title,fetchURL,isLargeRow}){
  const [Movies,setMovies]= useState([]);
  const [trailerUrl,setTrailerUrl]= useState("");

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(fetchURL);
      // console.log(request.data.results);
      setMovies(request.data.results)
      return(request)
    }
    fetchData()

  },[fetchURL])

  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    }
  }

  const handleClick= (movie) =>{
    if (trailerUrl) {
      setTrailerUrl("");
    }else{
      movieTrailer(movie?.name || "")
      .then ((url) =>{
        const urlParams = new URLSearchParams (new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
    .catch ((error) => console.log(error));
    }
  }

  console.log(Movies)
  
    return(
        <>
        <div className='big_div'>
        <div className='row'>
          <h2 className='heading_app'>{title}</h2>
          <div className='row__posters'>
               {Movies.map(movie =>(
              <img 
              className={`row__poster ${isLargeRow  && "row__posterLarge"}`}
              key={movie.id}
              onClick={()=> handleClick(movie)}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
               alt={movie.name}></img>
            
          
            ))}

          </div>
         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
        </div>
        </>
    )
}


export default Rows

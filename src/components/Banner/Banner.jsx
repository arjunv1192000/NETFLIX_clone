import React,{useEffect,useState} from 'react'
import './Banner.css';
import axios from '../../axios'
import { API_KEY ,imageUrl} from '../../constants/constants';

function Banner() {
  const [movie,setMovie]=useState ()
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((respones)=>{
      console.log(respones.data.results[0]);
      setMovie(respones.data.results[0])

    })
  },[])
  return (
    
    <div 

    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path  :""  })`}}
    
     className='banner'>
        <div className='banner_content'>
            <h1 className='title'>{movie ? movie.title :""}</h1>
            <div className='banner_button'> 
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{ movie ? movie.overview :"" }</h1>

        </div>
        <div className="fade"></div>

    </div>
  )
}

export default Banner
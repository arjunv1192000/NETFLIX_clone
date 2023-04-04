import React,{useEffect,useState} from 'react'
import './Rowpost.css';
import axios from '../../axios'
import {imageUrl } from '../../constants/constants';
import {useNavigate} from 'react-router-dom'


function Rowpost(props) {
  const [movie,setMovie]=useState ([])
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get(props.url).then((respones)=>{
      console.log(respones.data.results[0]);
      setMovie(respones.data.results)

    })
  },[])
  const handlemovie=(id)=>{
    console.log(id);
    navigate(`/moviedetails/${id}`)

  }
  return ( 
    <div className='row'>
        <h1>{props.title }</h1>
        <div className='posters'>
          {movie.map((obj)=>



          <img onClick={()=>handlemovie(obj.id)} className={ props.isSmall ? 'smallpost':'post'} src={`${imageUrl+obj.backdrop_path}`} alt="posterimg" />  


          )}
          
           
            
        </div>

    </div>
  )
}

export default Rowpost
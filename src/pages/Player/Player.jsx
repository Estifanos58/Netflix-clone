import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams, useNavigate } from 'react-router-dom'

function Player() {

  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at : "",
    typeof : ""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDA5MTFlZTIzYTFhN2EwYjEzM2IwMWY2MDBiMWU3NCIsIm5iZiI6MTcyNzE3ODY1Mi41NzMwOTQsInN1YiI6IjY2ZjJhNGFmYTk3ODgwMTQ4ZjNiNmY1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SP0ugvcIy3JuBaWEdgy3B-6bpe3A3TPOzv0rtGJE188'
    }
  };
  
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));
},[])
  return (
    <div className='player'>
      <img onClick={()=> navigate('/')} src={back_arrow_icon} alt="back" />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width={'90%'} height={'90%'} title='trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
    </div>
    </div>
  )
}

export default Player
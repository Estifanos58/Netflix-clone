import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link }  from 'react-router-dom'



function Titlecards({title, category}) {
  const [apiData , setApiData] = useState([])
  const cardsRef = useRef()


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDA5MTFlZTIzYTFhN2EwYjEzM2IwMWY2MDBiMWU3NCIsIm5iZiI6MTcyNzE3ODY1Mi41NzMwOTQsInN1YiI6IjY2ZjJhNGFmYTk3ODgwMTQ4ZjNiNmY1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SP0ugvcIy3JuBaWEdgy3B-6bpe3A3TPOzv0rtGJE188'
    }
  };
  



  const handleWheel = (event)=>{
  event.preventDefault;
  cardsRef.current.scrollLeft += event.deltaY;
  } 

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category ? category: 'now_playing'}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])

  return (
    <div className='titlecards'>
      <h1>{title? title :'Popular on Netflix'}</h1>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="card-image" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards
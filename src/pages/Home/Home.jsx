import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'



function Home() {
  return (
    <div className='Home'>
        <Navbar />
        <div className="hero">
          <img src={hero_banner} alt="hero"  className='banner-img'/>
          <div className="hero-caption">
            <img src={hero_title} alt="hero-title" className='caption-img'/>
            <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on aquest to save the city from an immortal enemy</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <div className="title-cards">
                <Titlecards  />
            </div>
           
          </div>
        </div>
        <div className="more-cards">
          <Titlecards title='Blockbuster Movies' category={'now_playing'}/>
          <Titlecards title={'Only on Netflix'} category={'top_rated'}/>
          <Titlecards title={'Upcoming'} category={'popular'}/>
          <Titlecards title={'Top Pics for you'} category={'upcoming'}/>
        </div>
        <Footer /> 
    </div>
  )
}

export default Home
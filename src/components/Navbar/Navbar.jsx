import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import caret_icon from '../../assets/caret_icon.svg'
import profile_img from '../../assets/profile_img.png'
import { logOut } from '../../firebase'
import { Link } from 'react-router-dom'



function Navbar() {
  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 100){
        navRef.current.classList.add('nav-dark')
      }else {
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <Link to={'/login'}> <img src={logo} alt="logo" /></Link>
       
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbr-right">
        <img src={search_icon} alt="search" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="bell" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="bell" className='profile' />
          <img src={caret_icon} alt="bell" />
          <div className="dropdown">
            <p onClick={()=>{logOut()}} >Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar 
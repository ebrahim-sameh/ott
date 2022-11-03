import React from 'react'
import { NavLink } from 'react-router-dom'

import './Links.css'

const Links = () => {
  return (
    <ul className='links'>
      <li>
        <NavLink 
          to='/' 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Audio
        </NavLink>
      </li>
      <li>
        <NavLink 
          to='/image' 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Image
        </NavLink>
      </li>
      <li>
        <NavLink 
          to='/video' 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Video
        </NavLink>
      </li>
    </ul>
  )
}

export default Links
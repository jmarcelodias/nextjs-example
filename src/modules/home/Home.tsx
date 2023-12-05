import React from 'react'
//
import Hero from './partials/Hero'
import About from './partials/About'
import Guests from './partials/guests'
import Schedule from './partials/schedule'


const Home = () => {
  return (
    <div className='__home' >
      <Hero />
      <About />
      <Guests />
      <Schedule />
    </div>
  )
}

export default Home
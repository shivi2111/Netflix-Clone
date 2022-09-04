import React from 'react'
import './FirstScreen.css'
import computer from './tv.png'
import video from './vid-intro.m4v'


export default function FirstScreen() {
  return (
    <div className='main-div'>
      <div className='first-content'>
            <div className='left'>
                <h1>Enjoy on your TV.</h1>
                <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
            </div>
            <div className='right'>
              <div id="parent">
                  <img src={computer} alt='computer'/>
                    <div id="child">
                      <video autoPlay muted loop>
                          <source src={video} />
                      </video>
                    </div>
              </div>
            </div>
      </div>
    </div>
  )
}

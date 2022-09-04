import React from 'react'
import './ThirdScreen.css'
import pile from './device-pile-in.png'
import device from './devices.m4v'

export default function ThirdScreen() {
  return (
    <div className='main-div'>
      <div className='first-content'>
            <div className='left'>
                <h1>Watch everywhere.</h1>
                <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
            </div>
            <div className='right'>
              <div id="parent-third">
                  <img src={pile} alt='pile'/>
                    <div id="child-third">
                      <video autoPlay muted loop>
                          <source src={device} />
                      </video>
                    </div>
              </div>
            </div>
      </div>
    </div>
  )
}

import './forth.css'
import React from 'react'
import child from './child.png'

export default function SecondScreen() {
    return (
        <div className='main-div'>
            <div className='forth-left'>
                <img src={child} alt ="child"/>
            </div>
            <div className='sec-right'>
                <div className='sec-content'>
                    <h1>Create profiles for children.</h1>
                    <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                </div>
            </div>
        </div>
      )
}


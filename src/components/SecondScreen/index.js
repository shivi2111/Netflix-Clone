import './SecondScreen.css'
import second from './sec1.png'
import strange from './strange.png'
import React from 'react'
import download from './icon.gif'

export default function SecondScreen() {
    return (
        <div className='main-div'>
            <div className='sec-left'>
                <div id="parent-sec">
                    <img src={second} alt = "sec"/>
                    <div id="child-sec">
                        <div className='sec-box-left'>
                            <img className='strange' src={strange} alt="strange" />
                            <h3>Stranger things</h3>
                            <p>Downloading...</p>
                            <img className='down-img' src={download}  alt="down" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='sec-right'>
                <div className='sec-content'>
                    <h1>Download your shows to watch offline.</h1>
                    <h2>Save your favourites easily and always have something to watch.</h2>
                </div>
            </div>
        </div>
      )
}


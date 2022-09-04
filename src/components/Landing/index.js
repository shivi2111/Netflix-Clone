import React from 'react'
import Globe from './globe.js'
import './Landing.css'

const Landing = () => {
  return (
    <div className='background'>
    <div></div>
    <div className='header'>
        <h1>NETFLIX</h1>
        <form className='langu'>
            <label htmlFor='Language' className='label-language'>
            <Globe/>
            </label>
            <select name = 'lang' className='language'>
            
                <option value={"English"}>English</option>
                <option value={"Hindi"}>Hindi</option>
            </select>
        <button className='btn button'>Sign In</button>
        </form>
        </div>

    <div className='content'>
        <p>
            Unlimited movies,TV shows and more.
        </p>
        <h1>Watch anywhere, Cancel anytime.</h1>
        <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
        <div className='sumit'>
        <input className='em' type={'email'} placeholder = ' Email address'></input>
        <button className='bt button'>Get Started  &gt;</button>
        </div>
    </div>


    </div>
  )
}

export default Landing

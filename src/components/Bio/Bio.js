import React from 'react'
import './bio.scss'

export const Bio = () => {
  return (
    <div className='bio-container'>
      <h1 id='title'>
        About
      </h1>
      

        <img src={require('../../assets/ProfPic.jpg')} id='profile-pic'/>

      <p>Los Angeles, Ca</p>
      <div className='techLogos'>
        <img src={require('../../assets/techLogos.png')} id='tech-logos'/>
      </div>
      <h1>Links</h1>
      <nav>
        <a href="https://twitter.com/g1itchw0lf" target="_blank">
          <img src={require('../../assets/twitterLogo.png')} />
        </a>
        <a href="https://github.com/dillonmerriam" target="_blank">
          <img src={require('../../assets/githubLogo.png')} />
        </a>
      </nav>
        
    </div>
  )
}

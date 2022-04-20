import React from 'react'
import './bio.scss'

export const Bio = () => {
  return (
    <div className='bio-container'>
      
        <img src={require('../../assets/ProfPic.jpg')} />
        <p>Hello, and welcome to my personal website!
        I am a Web & Applications Developer from Los Angeles, California 
        with experience in using various technologies such as (but not limited to)
        HTML, CSS, Javascript, React, Node, SQL, MongoDB, Next, Gatsby, and Preact!
        </p>
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

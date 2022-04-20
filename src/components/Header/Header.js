import React from 'react'
import './header.scss'

export const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-title-box'>
        <h1 id='title'>
          Dillon Merriam
        </h1>
        <p>Frontend Web Developer</p>
      </div>
      <nav>
        <a href="https://github.com/dillonmerriam">
          <button>Github</button>
        </a>
        <a href="https://twitter.com/g1itchw0lf">
          <button>Twitter</button>
        </a>
        <button>Blog</button>
        <button>About</button>
        <button>Contact</button>
      </nav>
    </div>
  )
}

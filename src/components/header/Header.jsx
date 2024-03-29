import React, { useState } from 'react'
import "./header.css"

export const Header = () => {
    const [Mobile, setMobile] = useState(false)
  return (
    <>
        <header>
            <div className='container flexSB'>
                <nav className='flexSB'>
                    <div className='logo'>
                        <img alt="logo" src='./images/logo.png'/>
                    </div>
                    <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Series</a>
              </li>
              <li>
                <a href='/'>Movies</a>
              </li>
              <li>
                <a href='/'>Pages</a>
              </li>
              <li>
                <a href='/'>Pricing</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
                </nav>
                <div className='account flexSB'>
                    <i className='fa fa-search'></i>
                    <i className='fa fa-bell'></i>
                    <i className='fa fa-user'></i>
                    <button>Subscribe Now</button>
                </div>
            </div>
        </header>
    </>
    
  )
}
export default Header

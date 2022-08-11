import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../images/headerLogo.png'
import './Navbarr.css'
import { IconContext } from 'react-icons/lib'
import DropdownMenu from '../Components/DropdownMenu'
import Adventures from './Adventures'
import Findadventure from './Findadventure'
import Joinexpedition from './Joinexpedition'
import Blogsection from './Blogsection'


const Navbarr = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)




  return (

    <IconContext.Provider value={{ color: 'black' }}>
      <div className='navbar'>
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            <img id='navbar-icon' className='img' src={Logo} alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <button className='login'>Login</button>
            <FaBars />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <div className='sidebar-container' > */}
            <div className='navbar-logo2'>
              <img id='navbar-icon2' className='img2' src={Logo} alt="logo" />
              <FaTimes onClick={closeMobileMenu} />
            </div>
            <hr className='line2' />
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                Experts
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                Adventures
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                Special Offers
              </Link>
            </li>
            <li className="nav-flag-item">
              <Link to='/products' className="nav-flag-links">
                <DropdownMenu />
              </Link>
            </li>
            <li className="nav-btn">
              <hr className='line1' />
              {button ? (
                <button className='btn-outline' ><span>Get Started</span>
                  <img className='arrow' src='https://expeditionsconnect.com/images/playOutlineIcon.svg' />
                </button>
              ) : (
                <button className='btn-outline' ><span>Get Started</span>
                  <img className='arrow' src='https://expeditionsconnect.com/images/playOutlineIcon.svg' />
                </button>
              )
              }
              <hr className='line1' />
            </li>
            {/* </div> */}
          </ul>
          
        </div>
      </div>

      <div className='background-img'></div>

        <Adventures />
        <Findadventure />
        <Joinexpedition />
        <Blogsection/>
     
    </IconContext.Provider>
  )
}

export default Navbarr;
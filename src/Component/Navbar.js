import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import Logo from '../images/headerLogo.png'
import './Navbar.css'
import Modal from 'react-modal'
import Dropdown from './Dropdown'
const Navbar = () => {

    const [click, setClick] = useState(false)
    const [ModalIsOpen, setModalIsOpen] = useState(false)


    const handleClick = () => setClick(!click)

    const handleOpenModal = () => {
        setModalIsOpen(true)
    }
    const handleCloseModal = () => {
        setModalIsOpen(false)
    }


    



    return (
        <IconContext.Provider value={{ color: 'black' }}>
            <section>
                <div className='navbar'>
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo">
                            <span className='img-parent'><img className='img' src={Logo} alt="logo" width={155} height={40} /></span>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <button className='login'>Login</button>
                            <FaBars onClick={handleOpenModal} />
                        </div>
                        <ul className='nav-menu'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links'>
                                    Experts
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links'>
                                    Adventures
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links'>
                                    Special Offers
                                </Link>
                            </li>
                            <div className="nav-item">
                                <Dropdown />
                            </div>
                            <li className='nav-btn nav-item'>
                                <hr className='line1' />
                                <button className='btn-outline' ><span>Get Started</span>
                                    <img className='arrow' src='https://expeditionsconnect.com/images/playOutlineIcon.svg' />
                                </button>
                                <hr className='line1' />
                            </li>
                        </ul>
                    </div>
                    <Modal className="modal-position" isOpen={ModalIsOpen}>
                        <div className='modal-navbar'>

                            <div className='modal-navbar-container'>

                                <div className="modal-navbar-content">
                                    <div className='navbar-logo-fatimes'>
                                        <img className='img-modal' src={Logo}
                                            alt="logo" />
                                        <FaTimes className='fa-times' onClick={handleCloseModal} />
                                    </div>
                                    <ul className='nav-menu1'>

                                        <li className='nav-item1'>
                                            <Link to='/' className='nav-links'>
                                                Home
                                            </Link>
                                        </li>

                                        <li className='nav-item1'>
                                            <Link to='/' className='nav-links'>
                                                Experts
                                            </Link>
                                        </li>

                                        <li className='nav-item1'>
                                            <Link to='/' className='nav-links'>
                                                Adventures
                                            </Link>
                                        </li>

                                        <li className='nav-item1'>
                                            <Link to='/' className='nav-links'>
                                                Special Offers
                                            </Link>
                                        </li>

                                        <div className="nav-item1 modal-nav-item">
                                            <Dropdown />
                                        </div>
                                        
                                        <li className='nav-btn'>
                                            <hr className='line1' />
                                            <button className='btn-outline' ><span>Get Started</span>
                                                <img className='arrow' src='https://expeditionsconnect.com/images/playOutlineIcon.svg' />
                                            </button>
                                            <hr className='line1' />
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>

                <div className='main-content'>
                    <div className="main-homepage">
                        <div className="img-bg">
                            <div className='bg-img-info'>
                                <div className='img-big-title'>
                                    <span> Take On The Challenge.</span>
                                    <br />
                                    <span className='span'> Embrace The Adventure.</span>
                                </div>
                                <div className="img-sub-title">
                                    <p>
                                        <span>Explore the best adventure courses, workshops and expeditions</span>
                                        <br />
                                        <span> directly crafted by professionals.</span>
                                    </p>
                                </div>
                                <div className="search-textbox">
                                    <div className='search-row1'>
                                        <div className='textbox-sub-title'>
                                            I'm Looking For
                                        </div>
                                        <div className="textbox-filter-heading">
                                            <select className='menu-item-group-list1'>
                                                <option className='menu-item'>All Adventures</option>
                                                <option className='menu-item'> Abseiling </option>
                                                <option className='menu-item'> Animal Watching </option>
                                                <option className='menu-item'> Avalanche Education</option>
                                                <option className='menu-item'> Back Country Skiing </option>
                                                <option className='menu-item'> Back Packing </option>
                                                <option className='menu-item'> Bird Watching </option>
                                                <option className='menu-item'> Camping </option>
                                                <option className='menu-item'> Caving </option>
                                                <option className='menu-item'> Hiking </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='search-row2'>
                                        <div className='textbox-sub-title'>
                                            Where
                                        </div>

                                        <div className="textbox-filter-heading">
                                            <select className='menu-item-group-list2'>
                                                <option className='menu-item'> On Earth </option>
                                                <option className='menu-item'> Pakistan </option>
                                                <option className='menu-item'> Afghanistan </option>
                                                <option className='menu-item'> Dubai </option>
                                                <option className='menu-item'> On Earth </option>
                                                <option className='menu-item'>Europe</option>
                                                <option className='menu-item'> Africa </option>
                                                <option className='menu-item'> Asia </option>
                                                <option className='menu-item'> South America</option>
                                                <option className='menu-item'> North America </option>
                                                <option className='menu-item'> Antarctica </option>


                                            </select>
                                        </div>
                                    </div>
                                    <div className="search-icon-container">
                                        <img className='search-icon' src="https://expeditionsconnect.com/images/home/search_icon.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </IconContext.Provider>
    )
}

export default Navbar
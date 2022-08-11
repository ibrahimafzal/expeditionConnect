import React, {useState} from 'react'
import USD from '../images/USD.svg'
import GBP from '../images/GBP.svg'
import EUR from '../images/EUR.svg'
import './DropdownMenu.css'


const Dropdown = () => {
    const [clickShow, setClickShow] = useState(false)

    const handleShowMenu = () => {
        setClickShow(!clickShow)
    }
    const handleHideMenu = () => {
        setClickShow(clickShow)
    }

    return (
        <div className='dropdown-container' onClick={handleShowMenu}>
            <ul className='flags-list1 flag-content1' >
                <li className='flag-item1 flag-btn1'><img className='flag-img' src={USD} alt="usd" />USD
                </li>
                    <i class="fa fa-caret-down"></i>
            </ul>
            <div className='dropdown-menu' style={{display: clickShow ? 'block' : 'none'}}>
                <ul className='flags-list flag-content'>
                    <li onClick={handleHideMenu} className='flag-item flag-btn'><img className='flag-img' src={USD} alt="usd" />USD</li>
                    <li className='flag-item flag-btn'><img className='flag-img' src={GBP} alt="gbp" />GBP</li>
                    <li className='flag-item flag-btn'><img className='flag-img' src={EUR} alt="eur" />EUR</li>
                </ul>
            </div>

        </div>
    )
}

export default Dropdown;
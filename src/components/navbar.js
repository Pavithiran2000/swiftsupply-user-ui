import React from 'react'
import './navbar.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { PiUserCircle, PiShoppingCart } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoChevronDownOutline } from 'react-icons/io5';

const Navbar = ({search}) => {
    return (
    <>
    <div className='header'>
        <div className='top_header'>
            <div className='logo'>
                <img src='images/swift-supply.png' alt='Swift Supply'></img>
            </div>
            <div className='right_box'>
                <div className='search_box'>
                    <button><AiOutlineSearch /></button>
                    <input type='text' value={search} placeholder='Search for Items...'></input>
                </div>
                <div className='icon_box'>
                    <div className='icon'>
                        <PiShoppingCart />
                    </div>
                    <div className='icon'>
                        <PiUserCircle />
                    </div>
                </div>
            </div>            
        </div>

        <div className='last_header'>
            <div className='category_box'>
                <div className='dd_box'>
                    <div className='icon'><RxHamburgerMenu /></div>
                    <div className='txt'>All Categories</div>
                    <div className='icon'><IoChevronDownOutline /></div>
                </div>
            </div>
            <div className='nav_box'>
                <div className='nav'>
                    <ul>
                        <li className='dd_box'>
                            <div className='txt'>Featured Selections</div>
                            <div className='icon'><IoChevronDownOutline /></div>
                        </li>
                        <li>Orders</li>
                        <li>Promotions</li>
                        <li>Wallet</li>
                        <li>Communication</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
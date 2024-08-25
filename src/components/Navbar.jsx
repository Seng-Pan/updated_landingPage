import React, { useState } from 'react'
import logo from '../assets/logo.png'
import LoginPopup from "./LoginPopup";

import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

// import scroll effect of react
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const [loginPopup, setLoginPopup] = useState(false);

    const handleLoginPopup = () => {
        setLoginPopup(!loginPopup);
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" }
    ]

    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto fixed top-0 right-0 left-0' >
                <div className='text-lg conatiner mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-14 items-center' >
                        <a href='#' className='text-2xl font-semibold flex items-center space-x-3 text-primanry'>
                            <img src={logo} alt='logo' className='w-10 h-10 inline-block items-center rounded-full' /> <span className='uppercase'>Recyglo</span>
                        </a>

                        {/* showing navitem using map */}
                        <ul className='md:flex space-x-12 hidden'>
                            {navItems.map(({ link, path }) =>
                                <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>
                                    {link}
                                </Link>)
                            }
                        </ul>
                    </div>

                    {/* language and signUp */}
                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href='/' className='hidden lg:flex items-center hover:text-[#2C6975]'><GrLanguage className='mr-2' />Language</a>
                        <button className='bg-[#68B2A0] py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-[#2C6975]' onClick={handleLoginPopup}>Login</button>
                    </div>

                    <LoginPopup loginPopup={loginPopup} handleLoginPopup={handleLoginPopup} />

                    {/* menu btn. only display on mobile */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary' />)}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`text-lg space-y-4 px-4 pt-24 pb-5 bg-[#2C6975] ${isMenuOpen ? "z-30 block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) =>
                        <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path}
                            className='text-white block hover:text-gray-300' onClick={toggleMenu}>
                            {link}
                        </Link>)
                }
            </div>
        </>
    )
}

export default Navbar
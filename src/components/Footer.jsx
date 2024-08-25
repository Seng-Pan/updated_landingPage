import React from 'react'
import logo from '../assets/logo.png'
import fb from '../assets/fb.png'
import ig from '../assets/IG.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
    return (
        <div className='bg-[#264D59] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-8'>
                    <a href='#' className='text-2xl font-semibold flex items-center space-x-3 text-primanry'>
                        <img src={logo} alt='logo' className='w-10 h-10 inline-block items-center rounded-full' /> <span className='uppercase'>Recyglo</span>
                    </a>

                    <p className='md:w-1/2'>
                        A simple paragraph is comprised of three major componenst. The first sentence, which is often a declarative sentence.
                    </p>

                    <div>
                        <input type='email' name='email' id='email' placeholder='Your email' 
                        className='bg-[#E0ECDE] py-2 px-4 rounded-md focus:outline-none' />
                        <input type='submit' name='email' value='Subscribe' 
                        className='px-4 py-2 bg-[#68B2A0] rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300' />
                    </div>
                </div>

                {/* footer navigations */}
                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start' >
                    <div className='spce-y-4 mt-5'>
                        <h4 className='text-xl mb-2'>Platform</h4>
                        <ul className='space-y-2'>
                            <a href='/' className='block hover:text-gray-300'>Overview</a>
                            <a href='/' className='block hover:text-gray-300'>Features</a>
                            <a href='/' className='block hover:text-gray-300'>About</a>
                            <a href='/' className='block hover:text-gray-300'>Pricing</a>
                        </ul>
                    </div>
                    <div className='spce-y-4 mt-5'>
                        <h4 className='text-xl mb-2'>Help</h4>
                        <ul className='space-y-2'>
                            <a href='/' className='block hover:text-gray-300'>How does it works?</a>
                            <a href='/' className='block hover:text-gray-300'>Where to ask question?</a>
                            <a href='/' className='block hover:text-gray-300'>How to play?</a>
                            <a href='/' className='block hover:text-gray-300'>What is needed for this?</a>
                        </ul>
                    </div>
                    <div className='spce-y-4 mt-5'>
                        <h4 className='text-xl mb-2'>Contacts</h4>
                        <ul className='space-y-2'>
                            <p className='hover:text-gray-300'>(012) 1234-567-890</p>
                            <p className='hover:text-gray-300'>123 xyz xyz</p>
                            <p className='hover:text-gray-300'>agfjoajagfmlk, afgj - adsagf</p>
                            <p className='hover:text-gray-300'>095467</p>
                        </ul>
                    </div>
                </div>
            </div>

            <hr/>

            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p>@ RECYGLO 20XX --- 20XX. All rights reserved.</p>
                <div className='flex items-center space-x-5'>
                    <img src={fb} alt='fb' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    <img src={ig} alt='fb' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    <img src={twitter} alt='fb' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                    <img src={linkedin} alt='fb' className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                </div>
            </div>
        </div>
    )
}

export default Footer
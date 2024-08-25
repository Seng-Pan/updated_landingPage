import React from 'react'
import Banner from './Banner'
import banner2 from '../assets/banner2.png'

function Newletter() {
  return (
    <div className='md:px-14 pc-4 max-w-screen-2xl mx-auto my-12'>
        {/* use our banner component and pass props */}
        <Banner 
        banner={banner2} 
        heading='Each customer share their discount code for friends'
        subheading={'A simple paragraph is comprised of three major componenst. The first sentence, which is often a declarative sentence, is called the "topic sentence."'}
        btn1={'I have a code'} 
        btn2={''} />
    </div>
  )
}

export default Newletter
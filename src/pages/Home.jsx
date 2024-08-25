import React from 'react'
import banner from '../assets/greenbanner.png'
import Banner from '../components/Banner'

function Home() {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id='home'>
        <Banner banner={banner} heading={"Waste Management Platform"} subheading={"A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in Chian."} 
        btn1={"Get Started"} btn2={"More Info"}/>
    </div>
  )
}

export default Home
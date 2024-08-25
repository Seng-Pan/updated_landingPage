import React from 'react'

import Navbar from '../components/Navbar'
import Home from './Home'
import Features from '../components/Features'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Newletter from '../components/Newletter'
import Footer from '../components/Footer'

function LandingPage() {
    return (
        <div>
            <Navbar />
            <Home />
            <Features />
            <About />
            <Pricing />
            <Newletter />
            <Footer />
        </div>
    )
}

export default LandingPage
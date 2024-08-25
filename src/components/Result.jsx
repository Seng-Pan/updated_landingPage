import React from 'react'
import Navbar from './Navbar';

function Result() {
    return (
        <>
            <Navbar />

            {/* result */}
            <div className='md:px-12 p-4 max-w-screen-2xl h-full mx-auto mt-24'>

                <div className="flex-1 relative min-h-screen bg-[#2C6975] p-10 text-white">
                    <div className="absolute top-4 left-4 pb-10">
                        <h1 className="text-4xl font-bold mb-1 text-shadow-md">Company name</h1>
                        <p className="text-lg"><small><i>XX/XX Address rd. Address province, XXXXX, Address</i></small></p>
                    </div>
                    <div className="flex flex-wrap justify-center mt-20 pt-10 space-x-6 pr-20 mr-40">
                        <div className="w-2/6 h-96 bg-[rgba(255,255,255,0.25)] h-74 w-50 flex items-center justify-center shadow-3xl">
                            <p className="text-center">This is your Total<br />Carbon Footprint Calculation</p>
                        </div>
                        <div className="relative flex flex-col pr-20">
                            <div className="bg-[rgba(255,255,255,0.25)] h-48 w-48 flex items-center justify-center shadow-3xl">
                                <p className="text-center">This is your Scope 1<br />Carbon Footprint Calculation</p>
                            </div>
                            <div className="absolute bg-[rgba(255,255,255,0.25)] h-48 w-48 flex items-center justify-center shadow-3xl top-48 left-48">
                                <p className="text-center">This is your Scope 2<br />Carbon Footprint Calculation</p>
                            </div>
                            <div className="absolute bg-[rgba(255,255,255,0.25)] h-48 w-48 flex items-center justify-center shadow-3xl bottom-48 left-96">
                                <p className="text-center">This is your Scope 3<br />Carbon Footprint Calculation</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Result
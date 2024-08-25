import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

function Resident() {
    const navigate = useNavigate();

    const clicknxt = async () => {
        navigate("/Result")
    }


    return (
        <>
            <Navbar />
            
            {/* Resident */}
            <div className='md:px-12 p-4 max-w-screen-2xl h-full mx-auto mt-24'>
                <div className="flex items-center justify-center h-screen bg-[#2C6975] relative rounded-[20px]">
                    <div className="text-center w-full">
                        <div className="flex flex-col lg:flex-row m-4 justify-center items-start gap-8">
                            <div className="flex flex-col items-start space-y-4">
                                {/* water bill */}
                                <div className="flex flex-col items-start">
                                    <label className="block text-lg font-bold mb-2 text-white">Water Bill</label>
                                    <button className="p-2 pl-4 pr-4 bg-gray-200 rounded-full shadow-md">upload file</button>
                                </div>

                                {/* electricity bill */}
                                <div className="flex flex-col items-start">
                                    <label className="block text-lg font-bold mb-2 text-white">Electricity Bill</label>
                                    <button className="p-2 pl-4 pr-4 bg-gray-200 rounded-full shadow-md">upload file</button>
                                </div>

                                {/* customer counts */}
                                <div className="flex flex-col items-start">
                                    <label className="block text-lg font-bold mb-2 text-white">Customer Counts</label>
                                    <input
                                        type="text"
                                        placeholder="Customer Counts"
                                        className="p-2 bg-gray-200 rounded-full shadow-md"
                                    />
                                </div>

                                {/* waste items */}
                                <div className="flex items-center space-x-8">
                                    <div className="flex flex-col items-start">
                                        <label className="block text-lg font-bold mb-2 text-white">Waste Item</label>
                                        <input
                                            type="text"
                                            placeholder="Item"
                                            className="p-2 bg-gray-200 rounded-full shadow-md"
                                        />
                                    </div>

                                    {/* waste types */}
                                    <div className="flex flex-col items-start">
                                        <label className="block text-lg font-bold mb-2 text-white">Waste type</label>
                                        <select className="p-2 bg-white border border-black rounded-full">
                                            <option>Select</option>
                                            <option>Waste 1</option>
                                            <option>Waste 2</option>
                                            <option>Waste 3</option>
                                        </select>
                                    </div>

                                    {/* waste amt */}
                                    <div className="flex flex-col items-start">
                                        <label className="block text-lg font-bold mb-2 text-white">Amount</label>
                                        <input
                                            type="text"
                                            placeholder="Amount"
                                            className="p-2 bg-gray-200 rounded-full shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* preview card */}
                            <div className="flex flex-col items-center -mt-16">
                                <div className='text-white text-xl font-bold text-shadow-md bg-[rgba(255,255,255,0.25)] rounded-[35px] shadow-3xl p-8 flex justify-center items-center h-80 w-64
                                cursor-pointer md:mt-16'>
                                    Bills' Preview
                                </div>
                            </div>
                        </div>

                        {/* next btn */}
                        <button className="absolute bottom-4 right-4 pl-4 pr-4 pt-2 pb-2 bg-[rgba(255,255,255,0.25)] rounded-full hover:bg-[#68B2A0] shadow-3xl text-white font-semibold" onClick={clicknxt}>next</button>
                    </div>
                </div>


            </div>


        </>
    );
}

export default Resident;



{/* <div className="bg-gray-200 font-medium text-shadow-md h-64 w-64 flex items-center justify-center shadow-md">
                                    Bills' Preview
                                </div> */}


                                // flex justify-center items-start space-x-8

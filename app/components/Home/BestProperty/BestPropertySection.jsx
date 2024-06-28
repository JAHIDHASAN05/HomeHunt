
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BestPropertySection = () => {
    return (<>
      

        <section className="bg-gray-900 text-white  p-20  ">
        <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Best Properties</h2>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="container mx-auto flex gap-8 px-10  max-w-5xl">
                <div className="flex flex-col  basis-1/2 ">
                    <div className="relative overflow-hidden rounded-lg shadow-lg  h-full">
                        <img src="https://as1.ftcdn.net/v2/jpg/07/50/76/28/1000_F_750762887_otJ80yYd6RHpbN4y5qh5WFasmCePhp5q.jpg" alt="Villa One Hyde Park" className="w-full h-full object-cover" />
                        <div className="absolute top-0 left-0 p-4">
                            <span className="bg-[#1F4B43] text-black text-[10px] font-semibold mr-2 px-3 py-1 rounded-full ">FOR SALE</span>
                            <span className="bg-[#E7C873] text-black text-[10px] font-semibold px-3 py-1 rounded-full">FEATURED</span>
                        </div>
                        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-20 w-full">
                            <h2 className="text-lg font-bold">Villa One Hyde Park</h2>
                            <p>2050 Bloomingdale Ave</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-xl font-bold">$120,000</span>
                                <div className="flex space-x-2 text-sm">
                                    <span>4 Beds</span>
                                    <span>2 Baths</span>
                                    <span>350 sqm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 justify-between ">
                    <div className="relative h-3/5  overflow-hidden rounded-lg shadow-lg mb-4">
                        <img fill src="https://as1.ftcdn.net/v2/jpg/07/50/76/28/1000_F_750762887_otJ80yYd6RHpbN4y5qh5WFasmCePhp5q.jpg" alt="Living Room" className=" object-cover" />
                        {/* <button className="absolute inset-0 flex items-center justify-center text-gray-800 bg-white bg-opacity-75 hover:bg-opacity-50 transition duration-300">
                            <span className="material-icons">play_arrow</span>
                        </button> */}
                    </div>
                    <div className='flex h-2/5 gap-5 '>
                        <div className="relative w-1/2  overflow-hidden rounded-lg shadow-lg mb-4 h-full">
                            <img fill src="https://as1.ftcdn.net/v2/jpg/07/50/76/28/1000_F_750762887_otJ80yYd6RHpbN4y5qh5WFasmCePhp5q.jpg" alt="Living Room" className="w-full h-full object-cover" />
                            {/* <button className="absolute inset-0 flex items-center justify-center text-gray-800 bg-white bg-opacity-75 hover:bg-opacity-50 transition duration-300">
                                <span className="material-icons">play_arrow</span>
                            </button> */}
                        </div>
                        <div className="bg-yellow-500 w-1/2 p-6 rounded-lg shadow-lg text-gray-900">
                            <h3 className="text-2xl font-bold mb-4">280+ <br /> <span className='text-sm font-medium'>Properties</span></h3>
                            <p className="mb-4 text-sm">Explore our wide variety of properties to find your dream home today.</p>
                            <div className='flex justify-end'>
                                <button className="bg-[#ffffff] text-black font-extralight p-3 m-[2px] rounded-full">
                                <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
    );
};

export default BestPropertySection;
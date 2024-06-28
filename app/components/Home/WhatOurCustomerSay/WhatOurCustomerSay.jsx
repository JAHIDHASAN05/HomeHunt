
import Image from 'next/image';
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import React from 'react';
import { FaAmazon, FaCcAmazonPay, FaGooglePay, FaGooglePlay } from 'react-icons/fa';

const WhatOurCustomerSaySection = () => {
    return (
        <div className="pt-12  bg-[#FFF8F6] text-center ">
            <div className='flex flex-col md:flex-row justify-between items-center mt-12  gap-8 px-16 md:px-32'>
                <div className="mb-6 text-start w-full">
                    <h2 className="text-2xl font-bold mb-4">What our customers are <br /> saying us?</h2>
                    <p className="text-gray-600 mb-6 text-[12px] ">
                        Various versions have evolved over the years, sometimes by <br /> accident, sometimes on purpose injected humour and the like.
                    </p>
                    <div className="flex  space-x-12 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold">10m+</h3>
                            <p className="text-sm md:text-base">Happy People</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">4.88</h3>
                            <p className="text-sm md:text-base">Overall rating</p>
                            <div className='flex'>
                                <RiStarFill className='text-[#e7c873]' />
                                <RiStarFill className='text-[#e7c873]' />
                                <RiStarFill className='text-[#e7c873]' />
                                <RiStarFill className='text-[#e7c873]' />
                                <RiStarHalfFill className='text-[#e7c873]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start mb-8 w-full">
                    <div className='flex gap-2'>
                        <div className=" relative w-14 h-14 flex items-center space-x-4 mb-4">
                            <Image
                                fill
                                src="https://static.vecteezy.com/system/resources/thumbnails/035/147/319/small_2x/ai-generated-beautiful-indian-girl-wearing-school-uniform-photo.jpg"
                                alt="Cameron Williamson"
                                className=" rounded-full"
                            />

                        </div>
                        <div className="text-start">
                            <h4 className="font-semibold">Cameron Williamson</h4>
                            <p className="text-gray-500">Designer</p>
                        </div>
                    </div>
                    <blockquote className="italic leading-6 text-md  font-medium  max-w-lg text-start">
                        Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </blockquote>
                    <div className="flex space-x-4 mt-4">
                        <button className="w-8 h-8 px-6 flex items-center justify-center bg-white border border-black rounded-full">&lt;</button>
                        <button className="w-8 h-8 px-6 flex items-center justify-center bg-white border border-black rounded-full">&gt;</button>
                    </div>
                </div>
            </div>
            <div className="py-12 pb-28 border-t border-black border-opacity-10 w-full">
                <p className=" mb-4">Thousands of world &lsquo;s leading companies trust Space</p>
                <div className="flex justify-evenly flex-wrap gap-5  items-center ">
                    <FaAmazon size={40} className='mx-8' />
                    <FaCcAmazonPay className='mx-8' size={40} />
                    <FaGooglePay className='mx-8' size={40} />
                    <FaAmazon className='mx-8' size={40} />
                    <FaCcAmazonPay className='mx-8' size={40} />
                    <FaGooglePay className='mx-8' size={40} />
                    <FaAmazon className='mx-8' size={40} />
                    <FaCcAmazonPay className='mx-8' size={40} />
                    <FaGooglePay className='mx-8' size={40} />

                </div>
            </div>
        </div>
    );
};

export default WhatOurCustomerSaySection;
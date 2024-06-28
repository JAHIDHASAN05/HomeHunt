'use client'
import { FaRegCopy ,FaArrowRight,FaBed } from "react-icons/fa";
import { useState } from 'react';
import Image from 'next/image';
import { PiToiletBold } from "react-icons/pi";



const properties = [
    {
        title: "Luxury Family Home",
        address: "1800-1818 79th St",
        price: "$395,000",
        beds: 4,
        baths: 1,
        area: 400,
        type: "for sale",
        featured: true,
        image: "https://img.freepik.com/premium-photo/3d-visualization-modern-house-bright-colors-house-facade-design-modern-architecture_727625-165.jpg?w=740",
    },
    {
        title: "Skyper Pool Apartment",
        address: "1020 Bloomingdale Ave",
        price: "$280,000",
        beds: 4,
        baths: 2,
        area: 450,
        type: "for sale",
        featured: false,
        image: "https://img.freepik.com/premium-photo/exterior-view-modern-white-house-generative-ai_834602-3549.jpg?w=740",

    },
    {
        title: "North Dillard Street",
        address: "4330 Bell Shoals Rd",
        price: "$250/month",
        beds: 4,
        baths: 2,
        area: 400,
        type: "for rent",
        featured: false,
        image: "https://as1.ftcdn.net/v2/jpg/03/92/14/30/1000_F_392143036_9pLBCZjMpkslgJxyL2YpJZhAy0ns5A35.jpg",
    },
    {
        title: "Eaton Garth Penthouse",
        address: "7722 18th Ave, Brooklyn",
        price: "$180,000",
        beds: 4,
        baths: 2,
        area: 450,
        type: "for sale",
        featured: true,
        image: "https://img.freepik.com/premium-photo/3d-rendering-upscale-modern-mansion-with-pool_190619-546.jpg?w=1380",
    },
    {
        title: "New Apartment Nice View",
        address: "42 Avenue O, Brooklyn",
        price: "$850/month",
        beds: 4,
        baths: 1,
        area: 460,
        type: "for rent",
        featured: true,
        image: "https://as1.ftcdn.net/v2/jpg/07/50/76/28/1000_F_750762887_otJ80yYd6RHpbN4y5qh5WFasmCePhp5q.jpg",
    },
    {
        title: "Diamond Manor Apartment",
        address: "7802 20th Ave, Brooklyn",
        price: "$259,000",
        beds: 4,
        baths: 2,
        area: 500,
        type: "for sale",
        featured: true,
        image: "https://as2.ftcdn.net/v2/jpg/07/50/76/29/1000_F_750762944_CHyZFTYZDZ56KyDkjygx3oWlh3qvwegp.jpg",
    },
];

const locationIcon = <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
</>


export default function FeaturedProperties() {
    const [filter, setFilter] = useState('all');

    const filteredProperties = properties.filter(property => {
        if (filter === 'all') return true;
        return property.type === filter;
    });

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Featured Properties</h2>
                <p className="text-center mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex justify-center mb-12">
                    <button
                        className={`text-[10px] md:text-base px-4 py-2 mx-2 ${filter === 'all' ? 'bg-[#FFF8F6] font-semibold text-black rounded-full border border-black'  : 'text-black font-semibold'}`}
                        onClick={() => setFilter('all')}
                    >
                        All Properties
                    </button>
                    <button
                        className={`px-4 text-[12px] md:text-base py-2 mx-2 ${filter === 'for sale' ? 'bg-[#FFF8F6] font-semibold text-black rounded-full border border-black'  : 'text-black font-semibold'}`}
                        onClick={() => setFilter('for sale')}
                    >
                        For Sale
                    </button>
                    <button
                        className={`px-4 text-[12px] md:text-base py-2 mx-2 ${filter === 'for rent' ? 'bg-[#FFF8F6] font-semibold text-black rounded-full border border-black'  : 'text-black font-semibold'}`}
                        onClick={() => setFilter('for rent')}
                    >
                        For Rent
                    </button>
                </div>




                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {filteredProperties.map((property, index) => (
                        <div
                            key={index}
                            className={`  relative border rounded-lg overflow-hidden ${property.featured ? "border-yellow-500" : ""}`}
                        >
                            <div className="relative h-[28rem]    ">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                <div className='absolute top-2 left-2 flex gap-1 '>                                   
                                    <span className={`${property.type === "for sale" ? "bg-[#1F4B43]" : "bg-[#E7C873]"} text-white text-[12px] font-semibold px-2 py-1 rounded-full`}>{property.type.toUpperCase()}</span>
                                    {property.featured && (
                                        <span className=" bg-yellow-500 text-black text-[12px] font-semibold px-2 py-1 rounded-full">FEATURED</span>
                                    )}
                                </div>
                                <div className="absolute mx-5 my-2 rounded-lg bottom-0 left-0 right-0 p-4 bg-white ">
                                    <h3 className="text-lg font-bold mb-2">{property.title}</h3>
                                    <p className="text-gray-600 mb-2 flex items-center gap-1"> {locationIcon}{property.address}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <p className="text-[#EB664E] font-semibold ">{property.price}</p>
                                        <span className="flex gap-1 items-center">
                                        <FaBed className="w-5" /> {property.beds} Beds
                                        </span>
                                        <span className="flex gap-1 items-center">
                                        <PiToiletBold /> {property.baths} Baths
                                        </span>
                                        <span className='flex gap-1 items-center'>
                                        <FaRegCopy /> {property.area} 
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center flex justify-center mt-12">
                    <button className="px-6 py-3 bg-[#E7C873] rounded-full text-[#1A1A1A] font-semibold text-sm flex gap-1 items-center justify-center ">See All Listing <FaArrowRight /></button>
                </div>
            </div>
        </section>
    );
}

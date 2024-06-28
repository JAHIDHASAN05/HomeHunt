
import React from 'react';

const BestPropertySection = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-4">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Best Properties</h2>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="relative group">
                    <img src="https://via.placeholder.com/600x400" alt="Property 1" className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute top-4 left-4 flex space-x-2">
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">FOR SALE</span>
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">FEATURED</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                        <h3 className="text-lg font-semibold">Villa One Hyde Park</h3>
                        <p className="text-gray-400">2050 Bloomingdale Ave</p>
                        <p className="text-lg font-semibold">$120,000</p>
                        <div className="flex space-x-2 text-sm text-gray-400">
                            <span>4 beds</span>
                            <span>2 baths</span>
                            <span>350 sq ft</span>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img src="https://via.placeholder.com/600x400" alt="Property 2" className="w-full h-full object-cover rounded-lg" />
                    <button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white bg-opacity-50 text-black rounded-full p-2 group-hover:bg-opacity-100 transition duration-300">&gt;</button>
                </div>
                <div className="relative group">
                    <img src="https://via.placeholder.com/600x400" alt="Property 3" className="w-full h-full object-cover rounded-lg" />
                    <button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white bg-opacity-50 text-black rounded-full p-2 group-hover:bg-opacity-100 transition duration-300">&gt;</button>
                </div>
                <div className="bg-yellow-500 text-black p-8 rounded-lg flex flex-col justify-between">
                    <h3 className="text-2xl font-semibold mb-4">280+ Properties</h3>
                    <p className="text-lg">Explore our wide variety of properties to find your dream home today</p>
                    <button className="mt-4 bg-black text-white px-4 py-2 rounded-full self-end">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default BestPropertySection;
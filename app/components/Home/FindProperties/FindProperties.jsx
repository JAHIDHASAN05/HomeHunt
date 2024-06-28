

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import SwiperCore, { Pagination } from 'swiper';


SwiperCore.use([Pagination]);

const FindProperties = () => {
    const properties = [
        { city: 'Chicago', properties: 2, imageUrl: 'https://img.freepik.com/premium-photo/3d-rendering-upscale-modern-mansion-with-pool_190619-546.jpg?w=1380' },
        { city: 'Los Angeles', properties: 1, imageUrl: 'https://img.freepik.com/premium-photo/exterior-view-modern-white-house-generative-ai_834602-3549.jpg?w=740' },
        { city: 'Miami', properties: 2, imageUrl: 'https://img.freepik.com/premium-photo/exterior-view-modern-white-house-generative-ai_834602-3549.jpg?w=740' },
        { city: 'Florida', properties: 3, imageUrl: 'https://as1.ftcdn.net/v2/jpg/07/50/76/28/1000_F_750762887_otJ80yYd6RHpbN4y5qh5WFasmCePhp5q.jpg' },
        { city: 'New York', properties: 8, imageUrl: 'https://as2.ftcdn.net/v2/jpg/07/50/76/29/1000_F_750762944_CHyZFTYZDZ56KyDkjygx3oWlh3qvwegp.jpg' },
    ];

    return (
        <div className="max-w-7xl mx-auto py-20 text-center bg-[#F7F7F7]">
            <h2 className="text-3xl font-bold  mb-3">Find Properties in These Cities</h2>
            <p className="text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                pagination={{ clickable: true }}
            >
                {properties.map((property, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[28rem] w-[20rem] rounded-lg overflow-hidden">
                            <Image
                                src={property.imageUrl}
                                alt={property.city}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40">
                                <div className="absolute top-4 text-start left-4 text-white p-2">
                                    <h3 className="text-sm font-extrabold">{property.city}</h3>
                                    <p className="text-white">{property.properties} Properties</p>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FindProperties;

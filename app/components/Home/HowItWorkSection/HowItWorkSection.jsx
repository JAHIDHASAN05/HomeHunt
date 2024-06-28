



import Image from 'next/image';
import { FaSearch, FaHandshake, FaKey, FaHome } from 'react-icons/fa';

const HowItWorkSection = () => {
    return (<>

        <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
            <div className=" w-full md:w-1/2 ">
                <div className="relative h-44 md:h-60  w-[80%]">
                    <Image
                        src="https://img.freepik.com/free-photo/young-couple-with-their-little-daughter-are-standing-near-new-house-with-cardboard-boxes_1303-30538.jpg?w=1380&t=st=1687958374~exp=1687958974~hmac=0da7dfef0a30a04efde9c1e68cce31c3b7cb0ae5b3d9e56adbf5d3fdc6df9968"
                        layout="fill"
                        objectFit="cover"
                        className='rounded-lg aspect-video'
                        alt="Family in front of house"
                    />

                </div>

                <div className='relative flex mt-2 gap-1 md:gap-5'>
                    <div className="basis-2/5 relative h-44 md:h-64 w-full">
                        <Image
                            src="https://img.freepik.com/free-photo/smiling-happy-family-lying-floor-house_171337-9672.jpg?w=1380&t=st=1687958374~exp=1687958974~hmac=debf4e17b7762a6078fa9dfdafd85730fc6d274f07326fd5d7a1b062f53c5fa3"
                            layout="fill"
                            objectFit="cover"
                            className='rounded-lg '
                            alt="Happy family at home"
                        />
                    </div>
                    <div className=" basis-3/5 relative h-64 md:h-96 w-full md:col-span-2">
                        <Image
                            src="https://img.freepik.com/premium-photo/3d-rendering-upscale-modern-mansion-with-pool_190619-546.jpg?w=1380"
                            layout="fill"
                            objectFit="cover"
                            className='rounded-lg'
                            alt="Modern house"
                        />
                    </div>
                    <div className="flex  gap-2 justify-center absolute -top-16 w-max p-4 right-10 left-1/2 transform -translate-x-1/2 bg-white  rounded-lg ">


                        <button className=" p-3 bg-[#204b42] hover:bg-[#0d7f6c] text-white e   rounded-full">
                        <FaHome className='md:h-8 md:w-8 h-6 w-6' />
                        </button>

                        <div className='flex flex-col items-start justify-center'>
                        <span className='text-[10px] md:text-base'>Properties For Sale</span>
                        <span className=" md:text-lg font-bold">14K</span>
                        </div>
                    </div>
                </div>

            </div>











            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                <h2 className="text-3xl font-bold mb-4">How It Works?</h2>
                <h3 className="text-2xl mb-6">Find a perfect home</h3>
                <p className="mb-6">Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam.</p>
                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <FaSearch className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold">Find Real Estate</h4>
                            <p>Sumo petentium ut per, at his wisi utinam adipisciing. Est ei graeco.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <FaHandshake className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold">Meet Realtor</h4>
                            <p>Sumo petentium ut per, at his wisi utinam adipisciing. Est ei graeco.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <FaKey className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold">Take The Keys</h4>
                            <p>Sumo petentium ut per, at his wisi utinam adipisciing. Est ei graeco.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>






    </>



    );
};

export default HowItWorkSection;

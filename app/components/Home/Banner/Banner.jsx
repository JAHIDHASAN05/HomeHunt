import BannerBg from '@/public/assets/image/BannerBg.png';

import NavbarContainer from '../../shared/Navbar/NavbarContainer';
// import HomeIcon from '@/public/assets/icon/HomeIcon.png'

const Banner = () => {
    const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-3 md:size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
    const HomeIcon = <span className="bg-[#ffffff]  text-white p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-3 md:size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
        </svg>
    </span>
    const AppartMentIcon = <span className="bg-[#ffffff]  text-black p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 md:size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>

    </span>

    return (
        <section className="md:px-10 px-1 py-5 flex flex-col items-center justify-between " style={{
            backgroundImage: `url(${BannerBg.src})`, backgroundSize: 'cover', height: '80vh', backgroundPosition: 'center', width: '100%',
        }}>

         <NavbarContainer />
            <div className="mb-10 md:mb-20 w-full inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                <button className="bg-transparent border border-[#1F4B43] py-2 px-4 rounded-full mb-4 text-[10px] font-semibold text-[#1F4B43]">LET US GUIDE YOUR HOME</button>
                <h1 className="text-4xl font-bold mb-2 text-[#1F4B43]">Believe in finding it</h1>
                <p className="text-[#1F4B43] mb-6 text-[10px] font-semibold">Search properties for sale and to rent in the UK</p>
                <div className="flex  items-center w-full max-w-md bg-white rounded-full overflow-hidden shadow-lg">
                    <input
                        type="text"
                        className="flex-grow ps-4  focus:outline-none"
                        placeholder="Enter Name, Keywords..."
                    />
                    <button className="bg-[#e7c873] hover:bg-yellow-600 text-white p-3 m-[2px] rounded-full">
                        {searchIcon}
                    </button>
                </div>
                <p className="text-white my-4  text-[14px] ">What are you looking for?</p>

                <div className="flex justify-center space-x-4">
                    <button className=" text-white p-2   backdrop-blur-[10px]  rounded-full text-[8px] md:text-[14px] shadow-lg flex items-center gap-1">
                        {HomeIcon}  Modern Villa</button>
                    <button className=" text-white p-2   backdrop-blur-[10px]  rounded-full text-[8px] md:text-[14px] shadow-lg flex items-center gap-1">
                        {AppartMentIcon}  Apartment</button>
                    <button className=" text-white p-2   backdrop-blur-[10px]  rounded-full text-[8px] md:text-[14px] shadow-lg flex items-center gap-1">
                        {AppartMentIcon}  Town House</button>
                   

                </div>
            </div>
        </section>
    );
};

export default Banner;


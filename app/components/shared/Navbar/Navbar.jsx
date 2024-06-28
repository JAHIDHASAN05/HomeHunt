import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/assets/icon/NavLogo.png'
import MenuButton from './MenuButton';

const Navbar = ({isOpen ,setIsOpen}) => {    

    const ContactIcon = <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>

    </>
    const profileIcon =
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>


    const downArrowIcon = <>  <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-40.74 -40.74 488.92 488.92"
        width=".8rem"
        height=".8rem"
        fill="#000"

        className="md:ms-[.2rem] "
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#red"
            strokeWidth="0.814874"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "></polygon>
        </g>
    </svg></>

    const NavContactInfo = <>
        <div className="ml-4 flex items-center justify-center md:ml-6">
            <button className="text-gray-800  hover:text-gray-600 px-3 py-2 rounded-md text-sm text-[12px]  font-medium flex gap-1 items-center"> {ContactIcon} <span className='md:hidden xl:block'>+68 685 88666</span></button>
            <button>{profileIcon}</button>
            <button className="ml-4 border md:hidden xl:block border-gray-800 text-black rounded-full px-3 py-1  text-[12px] font-medium">Add Property</button>
        </div>
    </>

    const navItems = <>
        <Link href="#" className="text-gray-800 flex items-center hover:text-gray-600 px-3 py-2 rounded-md ">Home {downArrowIcon}</Link>
        <Link href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md  flex items-center">Listings {downArrowIcon}</Link>
        <Link href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md  flex items-center">Members {downArrowIcon}</Link>
        <Link href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md  flex items-center">Blog {downArrowIcon}</Link>
        <Link href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md  flex items-center">Pages {downArrowIcon}</Link>
        <Link href="#" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md  ">Contact </Link>
    </>

    return (
        <nav className={` ${isOpen && 'rounded-b-none'} relative bg-white  rounded-2xl md:rounded-full  w-full`}>

            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex gap-2 items-center">
                            <Image className="h-7 w-7" src={Logo} alt="Logo" />
                            <h1 className='text-md font-semibold'>JustHome</h1>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4 text-[10px] font-bold">
                            {navItems}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        {NavContactInfo}
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <MenuButton setIsOpen={setIsOpen} isOpen={isOpen}/>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute bg-white w-full rounded-b-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 border flex flex-col items-center sm:px-3">
                        {navItems}
                    </div>
                    <div className="pt-4 pb-3 border-t  border-gray-200">
                        {NavContactInfo}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

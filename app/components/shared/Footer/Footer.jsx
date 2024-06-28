// // components/Footer.js
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-green-900 text-white py-8">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Subscribe Section */}
//         <div className="col-span-1">
//           <h3 className="font-bold mb-2">Subscribe</h3>
//           <form className="flex flex-col">
//             <input
//               type="email"
//               placeholder="Your email"
//               className="p-2 mb-2 rounded bg-white text-black"
//             />
//             <button className="p-2 bg-blue-500 rounded hover:bg-blue-700">
//               Send
//             </button>
//           </form>
//           <p className="mt-2">Subscribe to our newsletter to receive our weekly feed.</p>
//         </div>

//         {/* Discover Section */}
//         <div className="col-span-1">
//           <h3 className="font-bold mb-2">Discover</h3>
//           <ul>
//             {['Miami', 'New York', 'Chicago', 'Florida', 'Los Angeles', 'San Diego'].map(city => (
//               <li key={city} className="mb-1">{city}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Quick Links Section */}
//         <div className="col-span-1">
//           <h3 className="font-bold mb-2">Quick Links</h3>
//           <ul>
//             {['About', 'Contact', 'FAQ\'s', 'Blog', 'Pricing Plans', 'Privacy Policy', 'Terms & Conditions'].map(link => (
//               <li key={link} className="mb-1">{link}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Us Section */}
//         <div className="col-span-1">
//           <h3 className="font-bold mb-2">Contact Us</h3>
//           <p>Email: <a href="mailto:hi@justhome.com" className="underline">hi@justhome.com</a></p>
//           <p>Phone: (123) 456-7890</p>
//           <h3 className="font-bold mt-4">Our Address</h3>
//           <p>99 Fifth Avenue, 3rd Floor, San Francisco, CA 1980</p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center">
//         <div className="mb-4 md:mb-0">
//           <a href="#" className="mr-4"><img src="/apple-store.png" alt="Download on the Apple Store" className="h-10" /></a>
//           <a href="#"><img src="/google-play.png" alt="Get it on Google Play" className="h-10" /></a>
//         </div>
//         <div className="text-center">
//           <p className="mb-4">Follow Us</p>
//           <div className="flex justify-center space-x-4">
//             <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
//             <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
//             <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//         </div>
//         <div className="text-center mt-4 md:mt-0">
//           <p>Copyright © 2024. JustHome</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// const Footer = () => {
//   return (
//     <footer className="bg-green-900 text-white py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h3 className="text-lg font-bold">JustHome</h3>
//             <form className="mt-4">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full p-2 mb-2 rounded text-gray-700"
//               />
//               <button className="bg-white text-green-900 px-4 py-2 rounded">
//                 Send
//               </button>
//             </form>
//           </div>
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h4 className="font-bold mb-2">Discover</h4>
//             <ul>
//               <li>Miami</li>
//               <li>New York</li>
//               <li>Chicago</li>
//               <li>Florida</li>
//               <li>Los Angeles</li>
//               <li>San Diego</li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h4 className="font-bold mb-2">Quick Links</h4>
//             <ul>
//               <li>About</li>
//               <li>Contact</li>
//               <li>FAQs</li>
//               <li>Blog</li>
//               <li>Pricing Plans</li>
//               <li>Privacy Policy</li>
//               <li>Terms & Conditions</li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h4 className="font-bold mb-2">Contact Us</h4>
//             <p>info@justhome.com</p>
//             <p>(123) 456-7890</p>
//             <h4 className="font-bold mt-4 mb-2">Our Address</h4>
//             <p>5678 Avenue, 3rd Floor</p>
//             <p>San Francisco, CA 12345</p>
//             <div className="flex space-x-2 mt-4">
//               <a href="#"><img src="/path/to/apple-store-badge.svg" alt="Apple Store" className="h-8"/></a>
//               <a href="#"><img src="/path/to/google-play-badge.svg" alt="Google Play" className="h-8"/></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-10">
//           <p>&copy; 2024 JustHome</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import Logo from '@/public/assets/icon/footerLogo.png'
import Image from 'next/image';

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1F4B43] text-white px-2 md:px-16 pt-5">
      <div className="container mx-auto px-4 ">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className='flex items-center gap-2'>
            <Image className="h-7 w-7 text-white" src={Logo} alt="Logo" />
            <h3 className="text-2xl font-bold">JustHome</h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-10 items-center  ">
            <ul className="flex flex-col gap-0 text-[10px] list-none">
              <li>F</li>
              <li>o</li>
              <li>l</li>
              <li>l</li>
              <li>o</li>
              <li>w</li>
              <li>u</li>
              <li>s</li>
            </ul>

            <div className="flex space-x-4">
              <a href="#" className="text-white"><FaFacebookF size={16} /></a>
              <a href="#" className="text-white"><FaTwitter size={16} /></a>
              <a href="#" className="text-white"><FaLinkedinIn size={16} /></a>
              <a href="#" className="text-white"><FaTwitter size={16} /></a>
              <a href="#" className="text-white"><FaLinkedinIn size={16} /></a>
            </div>
          </div>
        </div>

        {/* Upper Section */}
        <div className="flex flex-col md:flex-row gap-5 justify-between items-start border-t border-green-800 pt-12 mb-10">
          <div className="w-max md:w-1/4 mb-6 md:mb-0  mr-10">
            <h4 className="text-lg font-bold mb-4">Subscribe</h4>
            <p className="text-sm mb-2">Subscribe to our newsletter to <br/> receive our weekly best</p>
            <form className="flex border-b-[.5px] p-2 border-opacity-15 border-slate-50">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 bg-transparent  rounded-l text-gray-700 focus:ring-0"
              />
              <button className="bg-transparent backdrop-blur-[10px]  px-4 py-2 rounded-full">
                <span className='text-white text-opacity-100'> Send</span>
              </button>
            </form>
          </div>
          <div className="w-max md:w-1/5 mb-6 md:mb-0 ">
            <h4 className="font-bold mb-2">Discover</h4>
            <ul className="space-y-1 text-[10px]">
              <li>Miami</li>
              <li>New York</li>
              <li>Chicago</li>
              <li>Florida</li>
              <li>Los Angeles</li>
              <li>San Diego</li>
            </ul>
          </div>
          <div className="w-max md:w-1/5 mb-6 md:mb-0 ">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-[10px]">
              <li>About</li>
              <li>Contact</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Pricing Plans</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="w-max md:w-1/5 mb-6 md:mb-0 ">
            <h4 className="font-bold mb-2">Contact Us</h4>
            <ul className="space-y-1 text-[10px]">
              <li>info@justhome.com</li>
              <li>(123) 456-7890</li>

            </ul>
          </div>
          <div className="w-max md:w-1/5 mb-6 md:mb-0 ">
            <h4 className="font-bold mb-2">Our Address</h4>
            <ul className="space-y-1 text-[10px]">
              <li>5678 Avenue, 3rd Floor</li>
              <li>San Francisco, CA 12345</li>

            </ul>
          </div>
          <div className="w-max md:w-1/5 mb-6 md:mb-0 ">
            <h4 className="font-bold mb-2">Our Address</h4>
            <ul className="space-y-1 text-[10px]">
              <div className="flex bg-[#2f5850]   items-center justify-between space-x-3 p-3  rounded-md">
                <FaApple size={24} />
             
                  <div className="border-l-[2px] border-gray-100 border-opacity-15 h-8"></div>
             
                <div>
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-sm font-semibold">Apple Store</p>
                </div>
              </div>
              <div className="flex items-center justify-between space-x-3 p-3 bg-[#2f5850] rounded-md">
                <FaGooglePlay size={20} />
                <div className="border-l-[2px] border-gray-100 border-opacity-15 h-8"></div>
                <div>
                  <p className="text-[10px]">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </div>

            </ul>
          </div>



        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-green-800 py-8">
          <p className="text-sm"> Copyright © 2024. JustHome</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
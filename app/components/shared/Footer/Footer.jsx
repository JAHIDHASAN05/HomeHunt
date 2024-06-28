// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Subscribe Section */}
        <div className="col-span-1">
          <h3 className="font-bold mb-2">Subscribe</h3>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 mb-2 rounded bg-white text-black"
            />
            <button className="p-2 bg-blue-500 rounded hover:bg-blue-700">
              Send
            </button>
          </form>
          <p className="mt-2">Subscribe to our newsletter to receive our weekly feed.</p>
        </div>

        {/* Discover Section */}
        <div className="col-span-1">
          <h3 className="font-bold mb-2">Discover</h3>
          <ul>
            {['Miami', 'New York', 'Chicago', 'Florida', 'Los Angeles', 'San Diego'].map(city => (
              <li key={city} className="mb-1">{city}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1">
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul>
            {['About', 'Contact', 'FAQ\'s', 'Blog', 'Pricing Plans', 'Privacy Policy', 'Terms & Conditions'].map(link => (
              <li key={link} className="mb-1">{link}</li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="col-span-1">
          <h3 className="font-bold mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:hi@justhome.com" className="underline">hi@justhome.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <h3 className="font-bold mt-4">Our Address</h3>
          <p>99 Fifth Avenue, 3rd Floor, San Francisco, CA 1980</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a href="#" className="mr-4"><img src="/apple-store.png" alt="Download on the Apple Store" className="h-10" /></a>
          <a href="#"><img src="/google-play.png" alt="Get it on Google Play" className="h-10" /></a>
        </div>
        <div className="text-center">
          <p className="mb-4">Follow Us</p>
          <div className="flex justify-center space-x-4">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <p>Copyright © 2024. JustHome</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
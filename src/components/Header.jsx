import  { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md  sticky top-0 z-50 ">
      <div className="mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold  text-blue-600">
            <img src="/images/logo.jpg" className='h-24'/>
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex text-l font-bold space-x-8 align-baseline">
            <Link to="/" className="text-gray-600  hover:text-black hover:bg-purple-300 px-4">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-black hover:bg-purple-300 px-4">About Us</Link>
            <a href="#about" className="text-gray-600 hover:text-black hover:bg-purple-300 px-4">Services</a>
            <a href="#contact" className="text-gray-600  hover:text-black hover:bg-purple-300 px-4">Diseases & Conditions</a>
            <a href="#contact" className="text-gray-600  hover:text-black hover:bg-purple-300 px-4">Contact Us</a>
            <a href="#contact" className="hover:scale-95 rounded-md text-white bg-purple-300 px-4 py-1">Book Appointment</a>
            
          </nav>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-2 py-4 font-bold">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">About us</Link>
              <a href="#about" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Diseases & Conditions</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact us</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Book Appointment</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

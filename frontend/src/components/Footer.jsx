import React from "react";
import footerimg from "../assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      {/* Top section  */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* left side logo and nav  */}
        <div className="md:w-1/2 w-full">
          <img src={footerimg} alt="logoimg" className="w-36 mb-5" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#home" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Service
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                About us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Conatct us
              </a>
            </li>
          </ul>
        </div>
        {/* Right side - Newsletter  */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            Subscribe to our newsletter to receive the latest updates, news,
            offers!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-black"
            />
            <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
              Subscribe
            </button>
          </div>
        </div>
      </div>
       {/* Bottom Section */}
       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-5 text-white absolute w-full">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center mb-4">
          <Link href="/contact" passHref>
            <p className="mr-6 cursor-pointer hover:text-gray-200">
              Contact Us
            </p>
          </Link>
          <Link href="/about" passHref>
            <p className="mr-6 cursor-pointer hover:text-gray-200">About Us</p>
          </Link>
          <Link href="/services" passHref>
            <p className="mr-6 cursor-pointer hover:text-gray-200">Services</p>
          </Link>
          <Link href="/blog" passHref>
            <p className="cursor-pointer hover:text-gray-200">Blog</p>
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <a href="#" className="mr-4 hover:text-gray-200">
            <FaFacebook />
          </a>
          <a href="#" className="mr-4 hover:text-gray-200">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaInstagram />
          </a>
        </div>
        <p className="mb-2">
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </p>
        <p>Designed and developed by Your Name</p>
      </div>
    </footer>
  );
};

export default Footer;

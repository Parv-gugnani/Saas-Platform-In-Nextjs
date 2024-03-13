"use client";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center mb-6">
          <Link href="/contact" target="_blank">
            <p className="mr-6 text-lg cursor-pointer hover:text-gray-200 transition-colors duration-300">
              Contact Us
            </p>
          </Link>
          <Link href="/about" passHref>
            <p className="mr-6 text-lg cursor-pointer hover:text-gray-200 transition-colors duration-300">
              About Us
            </p>
          </Link>
          {/* <Link href="/services" passHref> */}
          <p className="mr-6 text-lg cursor-pointer hover:text-gray-200 transition-colors duration-300">
            {/* Services */}
            <Sheet>
              <SheetTrigger>Services</SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold text-4xl">
                    Our Services
                  </SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </p>
          {/* </Link> */}
          <Link href="/blog" passHref>
            <p className="text-lg cursor-pointer hover:text-gray-200 transition-colors duration-300">
              Blog
            </p>
          </Link>
        </div>
        <div className="flex items-center mb-6">
          <a
            href="#"
            className="mr-4 text-xl hover:text-gray-200 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="mr-4 text-xl hover:text-gray-200 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-xl hover:text-gray-200 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="mb-4 text-sm">
          © {new Date().getFullYear()} MomentumX. All rights reserved.
        </p>
        <p className="text-sm">
          Designed and developed by{" "}
          <Link
            href="https://www.linkedin.com/in/parv-gugnani/"
            target="_blank"
          >
            <span className="font-semibold underline underline-offset-1">
              Parv
            </span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

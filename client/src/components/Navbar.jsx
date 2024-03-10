"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <nav className="border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              {/* Hamburger Icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Desktop Navbar */}
          <div className="flex-1 flex md:grid md:grid-cols-2  items-center grid-cols-2 justify-center md:justify-items-stretch sm:items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center sm:self-start py-2.5">
              <Link href="/" title="homepage-link" rel="noopener noreferrer">
                <Image
                  className="h-12 w-20 ms-6 mbMedium:h-10 mbMedium:w-auto"
                  src="/icons/logo_tepl_final_22 1.svg"
                  alt="Workflow"
                  width={380}
                  height={390}
                />
              </Link>
            </div>
            {/* Desktop Menu Links */}
            <div className="hidden sm:block sm:ml-6 md:justify-self-end ">
              <div className="flex mbMedium:space-x-2 lg:space-x-4">
                {/* Links */}
                <NavLink href="/" title="homepage-link" path={path}>
                  About&nbsp;Us
                </NavLink>
                <NavLink href="/courses" path={path}>
                  Courses
                </NavLink>
                <NavLink href="/people" path={path}>
                  People
                </NavLink>
                <NavLink href="/contact" path={path}>
                  FAQ's
                </NavLink>
                <NavLink href="/suggest" path={path}>
                  Suggestion&nbsp;Box
                </NavLink>
                <Link href="/courses" passHref>
                  <button className="flex justify-center items-center px-3 py-1.5 border-1 rounded-md focus:outline-none text-indigo-700 bg-transparent cursor-pointer transition-transform duration-500 border-2 border-indigo-600 rounded-10 shadow-inset-0 hover:text-white hover:shadow-inset-0 hover:bg-indigo-700 mbSmall:max-md:h-8 mbSmall:max-md:mt-0.5">
                    Courses
                    <img src="icons/Vector.svg" className="px-2" alt="" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={open}
        enter="transition-all ease-in-out duration-300"
        enterFrom="h-0 "
        enterTo="h-52 opacity-100"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="h-52 opacity-100"
        leaveTo="h-0 opacity-0"
      >
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" path={path}>
              About Us
            </MobileNavLink>
            <MobileNavLink href="/team" path={path}>
              Courses
            </MobileNavLink>
            <MobileNavLink href="/people" path={path}>
              People
            </MobileNavLink>
            <MobileNavLink href="/contact" path={path}>
              FAQ's
            </MobileNavLink>
            <MobileNavLink href="/suggest" path={path}>
              Suggestion Box
            </MobileNavLink>
            <MobileNavLink href="/login" path={path}>
              Login
            </MobileNavLink>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;

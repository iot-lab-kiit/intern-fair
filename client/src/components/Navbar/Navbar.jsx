"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import MobileMenuTransition from "./MobileMenuTransition";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/login", "/signup"];

  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  if (shouldHideNavbar) {
    return null;
  }
  return (
    <nav className="border-b border-[#ECECEC] max-sm:border-opacity-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile Menu Button */}

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
                <NavLink href="/" title="homepage-link">
                  About&nbsp;Us
                </NavLink>
                <NavLink href="/courses">Courses</NavLink>
                <NavLink href="/community">People</NavLink>
                <NavLink href="/contact">FAQ's</NavLink>
                <NavLink href="/suggest">Suggestion&nbsp;Box</NavLink>
                <Link href="/courses" passHref>
                  <button className="flex justify-center items-center px-3 py-1.5 border-1 rounded-md focus:outline-none text-indigo-700 bg-transparent cursor-pointer transition-transform duration-500 border-2 border-indigo-600 rounded-10 shadow-inset-0 mbSmall:max-md:h-8 mbSmall:max-md:mt-0.5">
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
      <MobileMenuTransition>
        <div className="sm:hidden">
          <div className="px-2 pt-2">
            <MobileNavLink href="/">About Us</MobileNavLink>
            <MobileNavLink href="/courses">Courses</MobileNavLink>
            <MobileNavLink href="/community">People</MobileNavLink>
            <MobileNavLink href="/contact">FAQ's</MobileNavLink>
            <MobileNavLink href="/suggest">Suggestion Box</MobileNavLink>
          </div>
        </div>
      </MobileMenuTransition>
    </nav>
  );
};

export default Navbar;

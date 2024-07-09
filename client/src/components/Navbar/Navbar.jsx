"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import MobileMenuTransition from "./MobileMenuTransition";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const hideNavbarRoutes = [
    "/login",
    "/signup",
    "/forgot-pass",
    "/change-pass",
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  if (shouldHideNavbar) {
    return null;
  }

  return (
    <nav className="border-b fixed w-full top-0  bg-white z-50 border-[#ECECEC] max-sm:border-opacity-0 ">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        <div className="relative  flex items-center justify-between h-16">
          {/* Mobile Menu Button */}

          {/* Desktop Navbar */}
          <div className="flex-1 flex md:grid md:grid-cols-2 items-center grid-cols-2 justify-center md:justify-items-stretch sm:items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center sm:self-start py-2.5">
              <Link href="/" title="homepage-link" rel="noopener noreferrer">
                <Image
                  className="w-auto h-10"
                  src="/icons/iot_lab.png"
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
                <NavLink
                  href={isHomePage ? "#about" : "/#about"}
                  title="homepage-link"
                >
                  About&nbsp;Us
                </NavLink>
                {/* <NavLink href="/courses">Courses</NavLink> */}
                <NavLink href="/community">Community</NavLink>
                <NavLink href={isHomePage ? "#faq" : "/#faq"}>FAQ's</NavLink>
                <NavLink href={isHomePage ? "#suggestion" : "/#suggestion"}>
                  Suggestion
                </NavLink>
                <NavLink href="/team">Team</NavLink>
                <Link href="/courses">
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
            <MobileNavLink href={isHomePage ? "#about" : "/#about"}>
              About Us
            </MobileNavLink>
            <MobileNavLink href="/courses">Courses</MobileNavLink>
            <MobileNavLink href="/community">Community</MobileNavLink>
            <MobileNavLink href={isHomePage ? "#faq" : "/#faq"}>
              FAQ's
            </MobileNavLink>
            <MobileNavLink href={isHomePage ? "#suggestion" : "/#suggestion"}>
              Suggestion
            </MobileNavLink>
            <MobileNavLink href="/team">Team</MobileNavLink>
          </div>
        </div>
      </MobileMenuTransition>
    </nav>
  );
};

export default Navbar;

"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNavLink = ({ href , children }) => {
  const path = usePathname();
  return (
    <Link href={href} path={path}>
      <div
        className={`${
          path === href ? 'bg-[#1F3DD9] text-white' : 'hover:bg-[#1F3DD9] hover:text-white'
        } text-[#2B2B2B] block px-3 py-2 rounded-md text-base font-medium`}
      >
        {children}
      </div>
    </Link>
  );
};

export default MobileNavLink;

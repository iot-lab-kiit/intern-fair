import Link from 'next/link';

const MobileNavLink = ({ href, path, children }) => {
  return (
    <Link href={href}>
      <div
        className={`${
          path === href ? 'bg-[#1F3DD9] text-white' : 'hover:bg-gray-700 hover:text-white'
        } text-[#2B2B2B] block px-3 py-2 rounded-md text-base font-medium`}
      >
        {children}
      </div>
    </Link>
  );
};

export default MobileNavLink;

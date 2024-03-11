import Link from 'next/link';

const NavLink = ({ href, title, path, children }) => {
  return (
    <Link href={href} title={title} rel="noopener noreferrer">
      <div
        className={`${
          path === href ? 'text-secondary' : 'hover:text-secondary'
        } text-primary px-3 py-2 rounded-md text-base font-medium mbSmall:max-md:text-sm`}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavLink;

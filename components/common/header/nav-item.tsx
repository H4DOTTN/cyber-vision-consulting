import Link from 'next/link';

const NavItem = ({ title, path }: { title: string; path: string }) => {
  return (
    <li className="cursor-pointer">
      <Link href={path}>
        <span className="text-white  hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          {title}
        </span>
      </Link>
    </li>
  );
};
export default NavItem;

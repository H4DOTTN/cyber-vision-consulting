import { FC } from 'react';
import NavItem from './nav-item';

type Props = {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};
const Navbar: FC<Props> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="fixed z-40 w-screen h-14 flex flex-row justify-between items-center px-8 py-4 bg-primary text-white">
      <div>logo here</div>
      <div className="hidden md:block">
        <nav>
          <ul className="flex flex-row items-center gap-x-10">
            <NavItem title="Home" path="/" />
            <NavItem title="Services" path="/services" />
            <NavItem title="Industries" path="/industries" />
            <NavItem title="Partners" path="/partners" />
            <NavItem title="About" path="/about" />
            <NavItem title="Contact" path="/contact" />
          </ul>
        </nav>
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-row items-center justify-center w-10 h-10 bg-primary rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
    </div>
  );
};

export default Navbar;

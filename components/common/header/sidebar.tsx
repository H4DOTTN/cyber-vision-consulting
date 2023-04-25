import Link from 'next/link';
import { FC } from 'react';
import NavItem from './nav-item';

type Props = {
  menuOpen: boolean;
  closeMenu: () => void;
};
const Sidebar: FC<Props> = ({ menuOpen, closeMenu }) => {
  return (
    <div
      className={`fixed text-white flex justify-end top-0 right-0 bottom-auto w-screen h-screen  z-30 will-change-transform transition-transform duration-500  ease-in-out  ${
        menuOpen ? 'translate-x-0' : 'translate-x-full delay-500'
      }`}
    >
      <div
        onClick={closeMenu}
        className={`absolute cursor-pointer top-0 right-0  left-0 bottom-0 h-full w-full backdrop-blur-sm  z-0 will-change-auto transition-opacity duration-500   ${
          menuOpen ? 'opacity-100 delay-500' : 'opacity-0 '
        }`}
      />

      <div className="relative px-10 pt-20 flex flex-col h-full  w-full  sm:w-3/4  bg-primary  z-10">
        <div>
          <ul className={'flex flex-col gap-y-4 text-2xl font-semibold'}>
            <NavItem title="Home" path="/" />
            <NavItem title="Services" path="/services" />
            <NavItem title="Industries" path="/industries" />
            <NavItem title="Partners" path="/partners" />
            <NavItem title="About" path="/about" />
            <NavItem title="Contact" path="/contact" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

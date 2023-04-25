import { useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar menuOpen={menuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Header;

import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
      <div className="flex justify-between py-4 max-w-7xl mx-auto px-4">
        <a className="text-xl" href="/">
          Portfolio
        </a>
        <div className="lg:hidden">
          {menuOpen ? (
            <RiCloseLine
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          ) : (
            <RiMenu2Line
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          )}
        </div>
        <div className={`lg:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex gap-6">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

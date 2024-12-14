import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const NavItem = ({ to, label, onClick }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-lg font-medium ${isActive ? 'text-blue-500' : 'text-black'}`
      }
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const hamburgerPaths = {
    closed: 'M6 18L18 6M6 6l12 12',
    open: 'M4 6h16M4 12h16M4 18h16'
  };

  return (
    <header className="header flex justify-between items-center px-6 py-4">
      <NavLink to="/" className="text-lg font-medium">
        <p className="text-black">SÉRGIO NEVES</p>
      </NavLink>

      {/* Hamburger Button for mobile */}
      <button
        className="lg:hidden focus:outline-none text-black"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? hamburgerPaths.closed : hamburgerPaths.open}
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex text-lg gap-7 font-medium">
        {NAV_LINKS.map(link => (
          <NavItem key={link.to} {...link} />
        ))}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full lg:hidden">
          <nav className="flex flex-col items-end justify-left text-lg gap-5 font-medium py-4 px-8">
            {NAV_LINKS.map(link => (
              <NavItem
                key={link.to}
                {...link}
                onClick={closeMenu}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
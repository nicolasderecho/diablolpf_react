import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/cn';

const navLinks = [
  { to: '/', label: 'L.P.F' },
  { to: '/runas', label: 'Runas' },
  { to: '/gemas', label: 'Gemas' },
  { to: '/palabras_runicas', label: 'Palabras Rúnicas' },
  { to: '/cubo', label: 'Cubo Horádrico' },
  { to: '/items_unicos', label: 'Items Únicos' },
  { to: '/items_base', label: 'Items Base' },
  { to: '/sets', label: 'Sets' },
  { to: '/tips', label: 'Tips' },
];

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened((open) => !open);
  const closeMenu = () => setMenuOpened(false);

  const linkClass = ({ isActive }) =>
    cn('block !m-0 px-3 py-2 text-gray-200 hover:text-diablo-green', isActive && 'text-white font-medium');

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <nav className="flex flex-col md:flex-row md:flex-nowrap md:items-center md:justify-between gap-0 md:gap-4 py-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <NavLink to="/" className={({ isActive }) => `${linkClass({ isActive })} shrink-0`} onClick={closeMenu}>
              L.P.F
            </NavLink>
            <button
              type="button"
              className="md:hidden shrink-0 p-2 text-gray-200 hover:text-white rounded"
              onClick={toggleMenu}
              aria-expanded={menuOpened}
              aria-label="Abrir menú"
            >
              <span className="text-xl">{menuOpened ? '×' : '☰'}</span>
            </button>
          </div>
          <div
            className={cn('w-full md:w-auto md:flex-1 flex flex-col md:flex-row md:flex-nowrap md:items-center md:justify-evenly gap-0 md:gap-4 border-t border-gray-700 md:border-t-0 pt-2 md:pt-0', menuOpened ? 'flex' : 'hidden md:flex')}
          >
            {navLinks.filter((l) => l.to !== '/').map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `${linkClass({ isActive })} whitespace-nowrap`}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

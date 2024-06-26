'use client';
import React, { FC, useState, useEffect } from 'react';
import { navigation } from '../../jsonData/navigation';
import Logo from '../Logo/Logo';
import { Link } from 'react-scroll';

const Header: FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
  }, [nav]);

  const closeMenu = () => {
    setNav(false);
  };
    
  return (
    <header className="padding-x pt-8 md:pt-6 z-10 max-width relative">
      <nav className="flex-between align-baseline text-white">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="hidden sm:flex sm:gap-6 xl:gap-14 text-sm tracking-[1.4px]">
          {navigation.map(({ id, title, path }) => (
            <li
              key={id}
              onClick={handleNav}
              className="underline-hover focus:outline-none"
            >
              <Link
                to={path}
                spy={true}
                duration={500}
                className="py-3 xl:py-7 hover:cursor-pointer underline-offset-4"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block sm:hidden z-10">
          <button className="uppercase mr-0 text-sm tracking-[1.4px]">
            {nav ? 'close' : 'Menu'}
          </button>
        </div>

        <ul
          className={
            nav
              ? 'mobile-menu__bg sm:hidden fixed top-0 left-0 bottom-0 right-0 w-full h-screen  flex-center flex-col  tracking-[1.8px]  text-center ease-in duration-300'
              : 'mobile-menu__bg sm:hidden fixed top-0 left-[-100%] bottom-0 right-0 w-full h-screen  flex-center flex-col  text-center ease-in duration-300'
          }
        >
          {navigation.map(({ id, title, path }) => (
            <li key={id}>
              <Link
                to={path}
                spy={true}
                duration={500}
                className="p-6 text-lg block"
                onClick={closeMenu}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

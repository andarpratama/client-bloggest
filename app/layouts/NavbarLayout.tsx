// app/components/layout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'react-feather';
import { useSelector, useDispatch } from "react-redux";
import { toogleTheme } from "../redux/feature/themeSlice "
import { RootState } from "../redux/store";
import { useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

const NavbarLayout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(toogleTheme());
  };

  useEffect(() => {
      document.documentElement.className = theme === "dark" ? "dark" : "light";
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col text-white">
      <header className="bg-white drop-shadow-md dark:drop-shadow-none dark:bg-teal-950 transition-[background] ease-in duration-100 p-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Additional logo content or logo image can be added here */}
            <h1 className="text-xl font-semibold">
              <Link href="/">
                <span className="text-black dark:text-white hover:text-teal-600 dark:hover:text-gray-300 cursor-pointer" style={{ fontFamily: '"Exo", sans-serif' }}>Andar Pratama</span>
              </Link>
            </h1>
          </div>
          <nav className="flex items-center gap-8">
            <Link href="/login">
              <span className="text-sm text-black dark:text-gray-50 dark:hover:text-teal-100 hover:text-teal-700 duration-300 cursor-pointer">
                Course
              </span>
            </Link>
            <Link href="/login">
              <span className="text-sm text-black dark:text-gray-50 dark:hover:text-teal-100 hover:text-teal-700 duration-300 cursor-pointer">
                Projects
              </span>
            </Link>
            <Link href="/login">
              <span className="text-sm text-black dark:text-gray-50 dark:hover:text-teal-100 hover:text-teal-700 duration-300 cursor-pointer">
                Portfolio
              </span>
            </Link>
            <Link className='bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 duration-300 px-4 py-1 rounded-md' href="/login">
              <span className="text-sm text-teal-50 dark:text-gray-50 dark:hover:text-teal-100 hover:text-teal-700 duration-300 cursor-pointer">
                Login
              </span>
            </Link>
            <button onClick={handleChangeTheme} >
              {theme === 'light' ? <Sun className='text-gray-800 hover:text-teal-700' /> : <Moon className='text-gray-50 hover:text-teal-200' />}
            </button>
            {/* Add additional navbar links as needed */}
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default NavbarLayout;

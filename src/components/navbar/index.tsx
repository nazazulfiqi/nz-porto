// components/Navbar.tsx

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ModeToggle } from '@/components/toggle';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='bg border-b-2 dark:bg-secondary-foreground'>
      <nav className='relative mx-auto flex max-w-7xl items-center justify-between bg-white px-4 py-4 dark:bg-secondary-foreground'>
        <Link className='flex gap-2 text-3xl font-bold leading-none ' href='#'>
          <Image
            src='/images/logo/logo-1.svg'
            alt='Logo'
            width={40}
            height={40}
          />
          <h3 className='text-3xl font-bold text-secondary dark:text-white'>
            Naza
          </h3>
        </Link>
        <div className='lg:hidden'>
          <button
            className='navbar-burger flex items-center p-3 text-primary'
            onClick={handleBurgerClick}
          >
            <svg
              className='block h-4 w-4 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Mobile menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <ul className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:mx-auto lg:flex  lg:w-auto lg:items-center lg:space-x-6'>
          <li>
            <a
              className='text-sm font-semibold text-secondary hover:text-primary dark:text-white dark:hover:text-primary       '
              href='#'
            >
              Home
            </a>
          </li>
          <li className='text-gray-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              className='current-fill h-4 w-4'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
              />
            </svg>
          </li>
          <li>
            <a
              className='text-sm font-semibold text-secondary hover:text-primary dark:text-white dark:hover:text-primary'
              href='#'
            >
              About Us
            </a>
          </li>
          <li className='text-gray-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              className='current-fill h-4 w-4'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
              />
            </svg>
          </li>
          <li>
            <a
              className='text-sm font-semibold text-secondary hover:text-primary dark:text-white dark:hover:text-primary'
              href='#'
            >
              Services
            </a>
          </li>
          <li className='text-gray-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              className='current-fill h-4 w-4'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
              />
            </svg>
          </li>
          <li>
            <a
              className='text-sm font-semibold text-secondary hover:text-primary dark:text-white dark:hover:text-primary'
              href='#'
            >
              Pricing
            </a>
          </li>
          <li className='text-gray-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              className='current-fill h-4 w-4'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
              />
            </svg>
          </li>
          <li>
            <a
              className='text-sm font-semibold text-secondary hover:text-primary dark:text-white dark:hover:text-primary'
              href='#'
            >
              Contact
            </a>
          </li>
        </ul>

        {/* <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
        <a className="hidden lg:inline-block py-2 px-6 bg-primary hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a> */}
        <div className='hidden gap-4  lg:flex'>
          <ModeToggle />
          <Button
            asChild
            className='rounded-full bg-primary transition duration-200 hover:bg-hover dark:bg-primary dark:text-secondary-foreground dark:hover:bg-primary-foreground'
          >
            <Link href='/login'>Contact Me</Link>
          </Button>
        </div>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}
      >
        <div
          className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'
          onClick={handleCloseClick}
        ></div>
        <nav className='fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6 dark:bg-secondary-foreground'>
          <div className='mb-8 flex items-center'>
            <Link
              className='mr-auto flex gap-2 text-3xl font-bold leading-none'
              href='#'
            >
              <Image
                src='/images/logo/logo-1.svg'
                alt='Logo'
                width={40}
                height={40}
              />

              <h3 className='text-3xl font-bold text-secondary dark:text-white'>
                Naza
              </h3>
              <ModeToggle />
            </Link>

            <button className='navbar-close' onClick={handleCloseClick}>
              <svg
                className='h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className='mb-1'>
                <Link
                  className='block rounded p-4 text-sm font-semibold text-secondary hover:bg-primary hover:text-white dark:text-white'
                  href='#'
                >
                  Home
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  className='block rounded p-4 text-sm font-semibold text-secondary hover:bg-primary  hover:text-white dark:text-white'
                  href='#'
                >
                  About Us
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  className='block rounded p-4 text-sm font-semibold text-secondary hover:bg-primary hover:text-white dark:text-white'
                  href='#'
                >
                  Services
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  className='block rounded p-4 text-sm font-semibold text-secondary hover:bg-primary hover:text-white dark:text-white'
                  href='#'
                >
                  Pricing
                </Link>
              </li>
              <li className='mb-1'>
                <Link
                  className='block rounded p-4 text-sm font-semibold text-secondary hover:bg-primary hover:text-white dark:text-white'
                  href='#'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-auto'>
            <div className='pt-6'>
              <Button
                asChild
                className='flex rounded-full bg-primary  transition duration-200 dark:bg-primary dark:text-secondary-foreground'
              >
                <Link href='/login'>Contact Me</Link>
              </Button>
            </div>
            <p className='my-4 text-center text-xs text-gray-400'>
              <span>Copyright © Naza Zulfiqi 2024</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

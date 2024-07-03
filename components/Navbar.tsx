'use client';

import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] max-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={250} height={115} className='object-contain' />
        </Link>
        <CustomButton title='Sign in' containerStyles='text-blue-700 rounded-full bg-white min-w-[130px]' />
      </nav>
    </header>
  );
};

export default Navbar;

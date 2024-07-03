import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 border-t border-gray-100 mt-5'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 padding-x py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src='/logo.png' alt='logo' width={250} height={115} className='object-contain' />
          <p className='text-base text-gray-700'>
            github.com/gkw777 2024 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              <div className='flex flex-col gap-5'>
                {link.value.map((item) => (
                  <Link key={item.title} href={item.url} className='text-gray-500'>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 padding-x py-10 gap-2'>
        <p>@2024 github.com/gkw777 All rights reserved</p>
        <div className='footer__copyrights-link'>
          <Link href='/' className='text-gray-500 text-nowrap'>
            Privacy & Policy
          </Link>
          <Link href='/' className='text-gray-500  text-nowrap'>
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

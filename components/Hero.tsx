'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = useCallback(() => {}, []);
  return (
    <div className='kg-hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find, book, rent a car-quick and super easy!</h1>
        <p className='hero_subtitle'>Streamline your car rental experience with our effortless booking process.</p>
        <CustomButton
          title='Explore Cars'
          containerStyles='bg-blue-700 text-white rounded-full mt-10'
          onClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' alt='hero' fill priority sizes='100vm' className='object-contain' />
        </div>
        <div className='hero__image-overlay'></div>
      </div>
    </div>
  );
};

export default Hero;

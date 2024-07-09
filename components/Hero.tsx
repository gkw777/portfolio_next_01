'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = useCallback(() => {
    const el_discover = document.getElementById('discover');
    el_discover?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <div className='kg-hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>많은 자동차을 검색해 보세요!</h1>
        <p className='hero_subtitle'>당신이 원하는 차종이 무엇이든 찾아 드립니다.</p>
        <CustomButton
          title='자동차 검색'
          containerStyles='bg-blue-700 text-white rounded-full mt-10'
          onClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' alt='hero' fill priority className='object-contain' />
        </div>
        <div className='hero__image-overlay'>
          <Image src='/hero-bg.png' alt='hero' fill priority className='object-contain' />
        </div>
      </div>
    </div>
  );
};

export default Hero;

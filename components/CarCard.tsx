'use client';

import { CarProps } from '@/types';
import { calculateCarRent } from '@/utils';
import { generateCarImageUrl } from '@/utils/apis';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import CarDetails from './CarDetails';
import CustomButton from './CustomButton';

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  const [open, setOpen] = useState<boolean>(false);
  const handleModal = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          [{make}] {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[2rem] leading-[2.375rem] font-extrabold'>
        <span className='self-start text-[.875rem] leading-[1.0625rem] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[.875rem] leading-[1.0625rem] font-medium'>/day</span>
      </p>
      <div className='relative w-full h-40 my-3'>
        <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray-500'>
          <CarCardIcon
            icon='/steering-wheel.svg'
            alt='steering wheel'
            text={transmission === 'a' ? 'Automatic' : 'Manual'}
          />
          <CarCardIcon icon='/tire.svg' alt='seat' text={drive.toUpperCase()} />
          <CarCardIcon icon='/gas.svg' alt='gas' text={`${city_mpg} MPG`} />
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full rounded-full bg-blue-700'
            textStyles='text-white text-[.875rem] leading-[1.0625rem] font-bold'
            rightIcon='right-arrow.svg'
            onClick={handleModal}
          />
        </div>
        <CarDetails open={open} onClose={handleModal} car={car} />
      </div>
    </div>
  );
};

export default CarCard;

interface CarIcon {
  icon: string;
  alt: string;
  text: string;
}
const CarCardIcon = ({ icon, alt, text }: CarIcon) => {
  return (
    <div className='car-card__icon'>
      <Image src={icon} width={20} height={20} alt={alt} priority className='object-contain' />
      <p className='text-sm'>{text}</p>
    </div>
  );
};

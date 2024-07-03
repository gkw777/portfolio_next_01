'use client';

import { CarProps } from '@/types';
import { generateCarImageUrl } from '@/utils/apis';
import Image from 'next/image';
import Modal from './base/Modal';

interface CardDetailsPorps {
  open?: boolean;
  onClose: () => void;
  car: CarProps;
}
const CarDetails = ({ open, onClose, car }: CardDetailsPorps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='flex-1 flex flex-col gap-3'>
        <div className='relative w-full h-40 bg-conver bg-center rounded-lg'>
          <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
        </div>
        <div className='flex gap-3'>
          <CarView icon={generateCarImageUrl(car, '29')} alt='car model' />
          <CarView icon={generateCarImageUrl(car, '33')} alt='car model' />
          <CarView icon={generateCarImageUrl(car, '13')} alt='car model' />
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <h2 className='font-semibold text-xl capitalize'>
          {car.make} {car.model}
        </h2>
        <div className='mt-3 flex flex-wrap gap-4'>
          {Object.entries(car).map(([key, value]) => (
            <div key={key} className='flex justify-between gap-5 w-full'>
              <h4 className='text-gray-500 capitalize'>{key.split('_').join(' ')}</h4>
              <p className='text-black font-semibold'>
                {key === 'transmission' ? (value === 'a' ? 'Automatic' : 'Manual') : value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default CarDetails;

interface CarSmallViewProps {
  icon: string;
  alt: string;
}
const CarView = ({ icon, alt }: CarSmallViewProps) => {
  return (
    <div className='flex-1 relative w-full h-24 bg-sky-50 rounded-lg'>
      <Image src={icon} alt={alt} fill priority className='object-contain' />
    </div>
  );
};

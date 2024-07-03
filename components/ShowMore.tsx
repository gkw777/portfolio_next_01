'use client';

import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import CustomButton from './CustomButton';

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
    // const newPathName = updateSearchParams('limit', `${newLimit}`);
    // router.push(newPathName);
  }, [pageNumber, setLimit]);

  return (
    <div className='w-full flex items-center justify-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          containerStyles='bg-blue-500 rounded-full text-white'
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;

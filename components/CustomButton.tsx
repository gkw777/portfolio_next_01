'use client';
import { CustomButtonProps } from '@/types';
import classNames from 'classnames';
import Image from 'next/image';

const CustomButton = (props: CustomButtonProps) => {
  const { title, containerStyles, type, textStyles, rightIcon, leftIcon, onClick, ...arg } = props;
  return (
    <button className={classNames('custom-btn', containerStyles)} type={type || 'button'} onClick={onClick} {...arg}>
      <span className={classNames('flex-1', textStyles)}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={rightIcon} className='object-contain' alt='arrow-right' fill />
        </div>
      )}
      {leftIcon && <Image src={leftIcon} className='object-contain' alt='arrow-left' width={24} height={24} />}
    </button>
  );
};

export default CustomButton;

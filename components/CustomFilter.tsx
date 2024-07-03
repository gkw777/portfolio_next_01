'use client';

import { CustomFilterProps } from '@/types';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

interface FilterProps {
  title: CustomFilterProps['title'];
  options: CustomFilterProps['options'];
  setFilter: (vlaue: any) => void;
}
const CustomFilter = ({ title, options, setFilter }: FilterProps) => {
  const [selected, setSelected] = useState<string>(title);

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e: string) => {
          setSelected(e);
          setFilter(e);
        }}>
        <div className='relative w-fit z-10'>
          <ListboxButton className='custom-filter__btn'>
            <span>{selected}</span>
            <Image
              src='/chevron-up-down.svg'
              alt='list up-down'
              width={20}
              height={20}
              className='ml-4 object-contain'
            />
          </ListboxButton>
          <ListboxOptions
            anchor='bottom'
            transition
            className='shadow-md w-[var(--button-width)] overflow-auto rounded-md bg-white py-1 border border-white/5 p-1 empty:invisible
            transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'>
            {options.map((option) => (
              <ListboxOption
                key={option.title}
                value={option.value}
                className='relative cursor-default select-none py-2 px-4 text-gray-900 data-[focus]:bg-blue-100 data-[selected]:bg-blue-500'>
                {option.title}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;

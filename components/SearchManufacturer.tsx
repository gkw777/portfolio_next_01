'use client';

import { manufacturers } from '@/constants';
import { SearchManuFacturerProps } from '@/types';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

const SearchManufacturer = ({ value, onChange }: SearchManuFacturerProps) => {
  const [query, setQuery] = useState<string>('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((manufacturer) => {
          return manufacturer.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''));
        });

  return (
    <div className='search-manufacturer'>
      <Combobox value={value} onChange={onChange}>
        <div className='relative w-full'>
          <ComboboxButton className='absolute top-[14px]'>
            <Image src='/car-logo.svg' className='ml-4' width={20} height={20} alt='car logo' />
          </ComboboxButton>
          <ComboboxInput
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            // displayValue={(value: string) => value}
            // onChange={(e) => {
            //   setQuery(e.target.value);
            // }}
          />
        </div>
        <ComboboxOptions
          anchor='bottom'
          transition
          className='shadow-md w-[var(--input-width)] overflow-auto rounded-md bg-white py-1 border border-white/5 p-1 empty:invisible
            transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-10'>
          {filteredManufacturers.map((item) => (
            <ComboboxOption
              key={item}
              value={item}
              className={'search-manufacturer__option data-[focus]:bg-blue-100 data-[selected]:bg-blue-500'}>
              {item}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;

{
  /* <input
        ref={inputRef}
        tabIndex={0}
        role='button'
        type='text'
        className='input input-bordered w-full'
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setSearchValue(e.target.value);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          console.log(11);
          setOpen(false);
          setSearchValue('');
        }}
      />
      <ul
        role='listbox'
        className={classNames(
          'absolute menu bg-base-100 rounded-box z-[2] p-2 shadow w-full overflow-auto flex-nowrap max-h-[15rem]',
          open ? 'open:visible  opactiy-100' : 'invisible opacity-0'
        )}>
        {filteredManufacturers.map((item) => (
          <li
            key={item}
            role='option'
            aria-selected={query === item ? true : false}
            className={classNames('rounded-lg', query === item ? 'bg-gray-400' : 'bg-white')}>
            <button
              className='px-[1rem] py-[0.5rem]'
              type='button'
              onMouseDown={(e) => {
                e.stopPropagation();
                onChange(item);
                setQuery(item);
              }}>
              {item}
            </button>
          </li>
        ))}
      </ul> */
}

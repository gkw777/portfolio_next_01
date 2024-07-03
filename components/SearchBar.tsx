'use client';

import classNames from 'classnames';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import SearchManufacturer from './SearchManufacturer';

interface SearchBarProps {
  setManufacturer: (value: string) => void;
  setModel: (value: string) => void;
}
const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState<string>('');
  const [searchModel, setSearchModel] = useState<string>('');
  // const router = useRouter();

  // const updateSearchParams = useCallback(
  //   (model: string, manufacturer: string) => {
  //     const searchParams = new URLSearchParams(window.location.search);
  //     if (model) {
  //       searchParams.set('model', model);
  //     } else {
  //       searchParams.delete('model');
  //     }
  //     if (manufacturer) {
  //       searchParams.set('manufacturer', manufacturer);
  //     } else {
  //       searchParams.delete('manufacturer');
  //     }

  //     const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  //     router.push(newPathName);
  //   },
  //   [router]
  // );

  const onSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchManufacturer === '') {
        alert('Plase fill in the search bar');
        return;
      }
      setManufacturer(searchManufacturer);
      setModel(searchModel);
    },
    [searchManufacturer, searchModel, setManufacturer, setModel]
  );

  return (
    <form className='searchbar' onSubmit={onSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer value={searchManufacturer} onChange={setSearchManufacturer} />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image src='/model-icon.png' alt='car model' className='absolute ml-4' width={20} height={20} />
        <input
          type='text'
          name='model'
          className='searchbar__input'
          placeholder='Tiguan'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type='submit' className={classNames('-ml-3 z-10', otherClasses)}>
      <Image src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40} className='object-contain' />
    </button>
  );
};

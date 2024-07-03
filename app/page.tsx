'use client';

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components';
import { fuels, yearsOfProduction } from '@/constants';
import { CarProps } from '@/types';
import { fetchCars } from '@/utils/apis';
import { memo, useEffect, useState } from 'react';

const Home = () => {
  const [allCars, setAllCars] = useState([]);
  const [manufacturer, setManufacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<number>(2022);
  const [fuel, setFuel] = useState<string>('');
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    const getCars = async () => {
      const result = await fetchCars({
        manufacturer,
        model,
        year,
        fuel,
        limit
      });
      try {
        // 오름차순
        result.sort((a: CarProps, b: CarProps) => {
          return a.make < b.make ? -1 : a.make > b.make ? 1 : 0;
        });
        setAllCars(result);
      } catch (error) {
        console.log(error);
      }
    };
    getCars();
  }, [manufacturer, model, year, fuel, limit]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      {/* <h1>next JS portfolio 02</h1> */}
      <Hero />

      <div id='discover' className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold text-black'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel} />
            <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
            <ShowMore pageNumber={limit / 10} isNext={limit > allCars.length} setLimit={setLimit} />
          </section>
        ) : (
          <div className='px-5 pt-5 text-center'>
            <h2 className='font-semibold text-2xl'>Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
};
export default memo(Home);

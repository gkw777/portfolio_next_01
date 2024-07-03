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
      <Hero />
      <div id='discover' className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold text-black'>자동차 카탈로그</h1>
          <p>당신이 좋아할 만한 자동차를 탐색해보세요</p>
        </div>
        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className='home__filter-container'>
            <CustomFilter title='연료' options={fuels} setFilter={setFuel} />
            <CustomFilter title='년도' options={yearsOfProduction} setFilter={setYear} />
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
            <h2 className='font-semibold text-2xl'></h2>
            <h2 className='font-semibold text-2xl'>ㅜ결과가 없습니다ㅜ</h2>
          </div>
        )}
      </div>
    </main>
  );
};
export default memo(Home);

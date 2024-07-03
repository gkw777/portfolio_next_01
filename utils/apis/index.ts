import { CarProps, FilterProps } from '@/types';

const url = `${process.env.NEXT_PUBLIC_APP_API}/`;
const options = {
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_KEY as string,
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, year, limit, model, fuel } = filters;
  const response = await fetch(
    `${url}cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
    options
  );
  try {
    return await response.json();
  } catch (error) {}
};

export const fetchCarModels = async (make: string = 'audi') => {
  const response = await fetch(url + 'carmodels?make=' + make, options);
  try {
    return await response.json();
  } catch (error) {}
};

export const fetchCarMakes = async () => {
  const response = await fetch(`${url}carsmakes`, options);
  try {
    return await response.json();
  } catch (error) {}
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split('_').join(' '));
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

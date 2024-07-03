import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  leftIcon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
}

export interface SearchManuFacturerProps {
  value: string;
  onChange: (value: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (value: number) => void;
}

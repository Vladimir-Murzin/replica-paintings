import React, { useState } from 'react';
import './Reproductions.scss';
import Content from '../Content/Content.tsx';
import Reproduction from '../Reproduction/Reproduction.tsx';
import Select from 'react-select'
import { useGetPaintingsByCountryQuery } from '../../store/paintingsApi.ts';
import { Grid } from 'react-loader-spinner';

const options = [
  { value: 'france', label: 'Франция' },
  { value: 'germany', label: 'Германия' },
  { value: 'england', label: 'Англия' }
];

const Reproductions = () => {
  const [country, setCountry] = useState(options[1]);
  const { data, error, isLoading } = useGetPaintingsByCountryQuery(country.value); 

  const handleCountryChange = selectedOption => {
    setCountry(selectedOption);
  };

  return (
    <div className='reproductions'>
      <Content>
        <div className='reproductions__content'>
          <div className='reproductions__header'>
            <h1 className='reproductions__title' id="reproductions">Репродукции</h1>
            <div className='reproductions__title-buttons'>
              {options.map(option => (
                <button
                  key={option.value}
                  className={`${country.value === option.value ? 'reproductions__active-button' : ''}`}
                  onClick={() => setCountry(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <Select
              options={options}
              className='reproductions__select'
              onChange={handleCountryChange}
              placeholder='Выберите страну авторов'
            />
          </div>
          <div className='reproductions__cards'>
            {isLoading && 
              <div className='reproductions__isLoading'>
                <Grid
                  visible={true}
                  height="200"
                  width="500"
                  color="#4fa94d"
                  ariaLabel="grid-loading"
                  radius="12.5"
                  wrapperStyle={{}}
                  wrapperClass="grid-wrapper"
                />
              </div>
            }
            {!isLoading && error && <div className='reproductions__error'>Произошла ошибка</div>}
            {!isLoading && !error && data && data.paintings.map(el => (
              <Reproduction key={el.name} reproduction={el} />
            ))}
          </div>
        </div>
      </Content>
    </div>
  );
}

export default Reproductions;
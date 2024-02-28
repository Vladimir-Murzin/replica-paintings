import React, { useState } from 'react';
import './Reproductions.scss';
import { france } from '../../config/config.tsx';
import { germany } from '../../config/config.tsx';
import { england } from '../../config/config.tsx';
import Content from '../Content/Content.tsx';
import Reproduction from '../Reproduction/Reproduction.tsx';
import Select from 'react-select'

const options = [
    { value: 'france', label: 'Франция' },
    { value: 'germany', label: 'Германия' },
    { value: 'england', label: 'Англия' }
  ]


const Reproductions = () => {
    const [country, setCountry] = useState(france);

    const handleCountryChange = selectedOption => {
        switch (selectedOption.value) {
            case 'france':
                setCountry(france);
                break;
            case 'germany':
                setCountry(germany);
                break;
            case 'england':
                setCountry(england);
                break;
            default:
                setCountry(france);
        }
    };

    return (
        <div className='reproductions'>
            <Content>
                <div className='reproductions__content'>
                    <div className='reproductions__header'>
                        <h1 className='reproductions__title'>Репродукции</h1>
                            <div className='reproductions__title-buttons'>
                                <button 
                                    className={`${country === france ? 'reproductions__active-button' : ''}`} 
                                    onClick={() => setCountry(france)}
                                >
                                    Франция
                                </button>
                                <button 
                                    className={`${country === germany ? 'reproductions__active-button' : ''}`}
                                    onClick={() => setCountry(germany)}
                                >
                                    Германия
                                </button>
                                <button 
                                    className={`${country === england ? 'reproductions__active-button' : ''}`}
                                    onClick={() => setCountry(england)}
                                >
                                    Англия
                                </button>
                            </div>
                            <Select 
                                options={options} 
                                className='reproductions__select' 
                                onChange={handleCountryChange}
                                placeholder='Выберите страну авторов'
                            />
                    </div>

                    <div className='reproductions__cards'>
                        {
                            country.map(el => {
                                return (
                                    <Reproduction key={el.name} reproduction={el}/>
                                )
                            })
                        }
                    </div>
                </div>
            </Content>
        </div>
    )
}

export default Reproductions;
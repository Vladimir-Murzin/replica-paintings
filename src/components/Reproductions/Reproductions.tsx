import React, { useState } from 'react';
import './Reproductions.scss';
import { france } from '../../config/config.tsx';
import { germany } from '../../config/config.tsx';
import { england } from '../../config/config.tsx';
import Content from '../Content/Content.tsx';
import Reproduction from '../Reproduction/Reproduction.tsx';


const Reproductions = () => {
    const [country, setCountry] = useState(france);

    return (
        <div className='reproductions'>
            <Content>
                <div className='reproductions__content'>
                    <div className='reproductions__header'>
                        <h1 className='reproductions__title'>Репродукции</h1>
                            <div className='reproductions__titleButtons'>
                                <button 
                                    className={`${country === france ? 'reproductions__activeButton' : ''}`} 
                                    onClick={() => setCountry(france)}
                                >
                                    Франция
                                </button>
                                <button 
                                    className={`${country === germany ? 'reproductions__activeButton' : ''}`}
                                    onClick={() => setCountry(germany)}
                                >
                                    Германия
                                </button>
                                <button 
                                    className={`${country === england ? 'reproductions__activeButton' : ''}`}
                                    onClick={() => setCountry(england)}
                                >
                                    Англия
                                </button>
                            </div>
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
import React from 'react';
import './Reproductions.scss';
import { france } from '../../config/config.tsx';
import Content from '../Content/Content.tsx';
import Reproduction from '../Reproduction/Reproduction.tsx';

const Reproductions = () => {
    return (
        <div className='reproductions'>
            <Content>
                <div className='reproductions__content'>
                    <div className='reproductions__header'>
                        <h1 className='reproductions__title'>Репродукции</h1>
                            <div className='reproductions__titleButtons'>
                                <button className='reproductions__titleButton'>Франция</button>
                                <button className='reproductions__titleButton'>Германия</button>
                                <button className='reproductions__titleButton'>Англия</button>
                            </div>
                    </div>

                    <div className='reproductions__cards'>
                        {
                            france.map(el => {
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
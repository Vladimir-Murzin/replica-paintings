import React from 'react';
import './Reproductions.scss';
import { france } from '../../config/config.tsx';
import { germany } from '../../config/config.tsx';
import { england } from '../../config/config.tsx';
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
                                <button>Франция</button>
                                <button>Германия</button>
                                <button>Англия</button>
                            </div>
                    </div>

                    <div className='reproductions__cards'>
                        {
                            germany.map(el => {
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
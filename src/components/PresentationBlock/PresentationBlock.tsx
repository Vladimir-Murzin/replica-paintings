import React from 'react';
import './PresentationBlock.scss';
import Content from '../Content/Content.tsx';
import {ReactComponent as LayerIcon} from '../../images/Layer.svg'

const PresentationBlock: React.FC = () => {
    return (
        <div className='presentationBlock'>
            <Content>
                <div className='presentationBlock__content'>
                    <div>
                        <LayerIcon/>
                    </div>
                    <div className='presentationBlock__productPresentation'>
                        <h1 className='presentationBlock__title'>Реплики картин от <span className='presentationBlock__galleryName'>Ink. House</span></h1>
                        <p className='presentationBlock__artDescription'>Высокое качество отрисовки на плотной бумаге или льняном холтсе. Редкие произведения, доступные цены</p>
                        <button className='presentationBlock__button'>Продукция</button>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default PresentationBlock;
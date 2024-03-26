import React from 'react';
import './PresentationBlock.scss';
import Content from '../Content/Content.tsx';
import {ReactComponent as LayerIcon} from '../../images/Layer.svg'

const PresentationBlock: React.FC = () => {
    return (
        <div className='presentation-block'>
            <Content>
                <div className='presentation-block__content'>
                    <div>
                        <LayerIcon />
                    </div>
                    <div className='presentation-block__product-presentation'>
                        <h1 className='presentation-block__title'>Реплики картин от <span className='presentation-block__gallery-name'>Ink. House</span></h1>
                        <p className='presentation-block__art-description'>
                            Высокое качество отрисовки на плотной бумаге или льняном холтсе. Редкие произведения, доступные цены
                        </p>
                        <button className='presentation-block__button'>Продукция</button>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default PresentationBlock;
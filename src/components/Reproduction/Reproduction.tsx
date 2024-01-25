import React from 'react';
import { IReproduction } from '../../config/config';
import './Reproduction.scss';
import { useAppDispatch } from '../../store/store.ts';
import { addToCart } from '../../store/cartSlice.ts';

interface IReproductionProps {
    reproduction: IReproduction;
}

const Reproduction: React.FC<IReproductionProps> = ({reproduction}) => {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(reproduction));
    };

    return (
        <div className='reproduction'>
            <img src={reproduction.img} alt={reproduction.name} className='reproduction__painting'/>
            <div className='reproduction__description'>
                <p className='reproduction__descriptionAuthor'>{reproduction.author}</p>
                <h1 className='reproduction__descriptionName'>{reproduction.name}</h1>
                <p className='reproduction__descriptionSize'>{reproduction.description}</p>
                <p className='reproduction__descriptionPrice'>{reproduction.price}</p>
                <button onClick={handleAddToCart} className='reproduction__addButton'>В корзину</button>
            </div>
        </div>
    )
};

export default Reproduction;
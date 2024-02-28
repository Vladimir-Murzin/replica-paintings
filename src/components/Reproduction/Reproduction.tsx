import React from 'react';
import { IReproduction } from '../../config/config';
import './Reproduction.scss';
import { useAppDispatch, useAppSelector } from '../../store/store.ts';
import { addToCart } from '../../store/cartSlice.ts';

interface IReproductionProps {
    reproduction: IReproduction;
}

const Reproduction: React.FC<IReproductionProps> = ({reproduction}) => {
    const dispatch = useAppDispatch();
    const paintings = useAppSelector((state) => state.cart.cartItems);

    const isAddedToCart = paintings.find((item) => item.id === reproduction.id) !== undefined;

    const handleAddToCart = () => {
        dispatch(addToCart(reproduction));
    };

    return (
        <div className='reproduction'>
            <img src={reproduction.img} alt={reproduction.name} className='reproduction__painting'/>
            <div className='reproduction__description'>
                <p className='reproduction__description-author'>{reproduction.author}</p>
                <h1 className='reproduction__description-name'>{reproduction.name}</h1>
                <p className='reproduction__description-size'>{reproduction.description}</p>
                <p className='reproduction__description-price'>{reproduction.price} руб</p>
                {isAddedToCart ? (
                    <button className='reproduction__added-to-cart-button'>
                        В корзине
                    </button>
                ) : (
                    <button onClick={handleAddToCart} className='reproduction__add-button'>
                        В корзину
                    </button>
                )}
            </div>
        </div>
    )
};

export default Reproduction;
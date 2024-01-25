import React from 'react';
import './CartItem.scss';
import { ReactComponent as DeleteIcon } from '../../images/Delete.svg';
import { IReproduction } from '../../config/config';

interface ICartItemProps {
    reproduction: IReproduction;
}

const CartItem: React.FC<ICartItemProps> = ({reproduction}) => {
    return (
        <div className='cart-item'>
            <div className='cart-item__description'>
                <div className='cart-item__info'>
                    <span>{reproduction.author}</span>
                    <span>{reproduction.description}</span>
                </div>
                <h5 className='cart-item__description-name'>{reproduction.name}</h5>
                <span className='cart-item__description-price'>{reproduction.price}</span>
                <button>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    )
};

export default CartItem;
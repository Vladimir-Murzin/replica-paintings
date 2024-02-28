import React from 'react';
import './CartItem.scss';
import { ReactComponent as DeleteIcon } from '../../images/Delete.svg';
import { IReproduction } from '../../config/config';
import { useAppDispatch } from '../../store/store.ts';
import { deleteFromCart } from '../../store/cartSlice.ts';

interface ICartItemProps {
    reproduction: IReproduction;
}

const CartItem: React.FC<ICartItemProps> = ({reproduction}) => {
    const dispatch = useAppDispatch();

    const handleDeleteFromCart = () => {
        dispatch(deleteFromCart(reproduction));
    };

    return (
        <div className='cart-item'>
            <div className='cart-item__description'>
                <div className='cart-item__info'>
                    <h5 className='cart-item__description-name-none'>{reproduction.name}</h5>
                    <span>{reproduction.author}</span>
                    <span>{reproduction.description}</span>
                    <div className='cart-item__description-price-none'>{reproduction.price} руб</div>
                </div>
                <h5 className='cart-item__description-name'>{reproduction.name}</h5>
                <span className='cart-item__description-price'>{reproduction.price} руб</span>
                <button onClick={handleDeleteFromCart}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    )
};

export default CartItem;

// &__description-name-none {
//     display: none;

//     @media (max-width: $TopTablet) {
//         display: inherit;
//     }
// }
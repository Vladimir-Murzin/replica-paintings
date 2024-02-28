import React from 'react';
import './CartPage.scss';
import Content from '../../components/Content/Content.tsx';
import CartItem from '../../components/CartItem/CartItem.tsx';
import { useAppSelector } from '../../store/store.ts';
import IconEasel from '../../images/IconEasel.png'

const CartPage: React.FC = () => {
    const paintings = useAppSelector((state) => state.cart.cartItems);
    
    const amountPrice = paintings.reduce((totalPrice, el) => {
        return totalPrice + parseFloat(el.price.replace(/\s+/g, ''));
    }, 0);

    return (
        <Content>
            {paintings.length > 0 ? (
                <div className='cart-page'>
                    <div className='cart-page__title'>
                        Корзина
                    </div>
                    <div>
                        {
                        paintings.map(el => {
                            return (
                                <CartItem reproduction={el}/>
                                )
                            }) 
                        }
                    </div>
                    <div className='cart-page__buy'>
                        <span>{amountPrice} руб</span>
                        <button>Оформить</button>
                    </div>
                </div>
            ) : (
                <div className='cart-is-empty'>
                    <div className='cart-is-empty__title'>
                        Корзина пуста
                    </div>
                    <div className='cart-is-empty__icon-easel'>
                        <img src={IconEasel} alt='IconEasel'/>
                    </div>
                </div>
            )}
        </Content>
    )
};

export default CartPage;
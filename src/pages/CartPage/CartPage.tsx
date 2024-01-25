import React from 'react';
import './CartPage.scss';
import { france, germany } from '../../config/config.tsx';
import Content from '../../components/Content/Content.tsx';
import CartItem from '../../components/CartItem/CartItem.tsx';

const paintings = [france[0], france[1], germany[2]];

const CartPage: React.FC = () => {
    return (
        <Content>
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
                    <span>14 500 руб</span>
                    <button>Оформить заказ</button>
                </div>
            </div>
            
        </Content>
    )
};

export default CartPage;
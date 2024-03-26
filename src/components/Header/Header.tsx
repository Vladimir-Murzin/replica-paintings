import React from 'react';
import './Header.scss';
import { ReactComponent as FrameIcon } from '../../images/Frame.svg';
import { ReactComponent as ShoppingCartIcon } from '../../images/ShoppingCart.svg';
import Content from '../Content/Content.tsx';
import { Link } from "react-router-dom";
import BurgerMenu from '../BurgerMenu/BurgerMenu.tsx';
import '../../styles/styles.scss';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <Content>
                <div className='header__content'>
                    <div>
                        <Link to="/"><FrameIcon/></Link>
                    </div>
                    
                    <BurgerMenu />
                    
                    <div className='header__menu'>
                        <p><a href="#reproductions">Репродукции</a></p>
                        <p><a href="#novelties">Новинки</a></p>
                        <p><a href="#about">О нас</a></p>
                        <Link to="/cart"><ShoppingCartIcon/></Link>
                    </div>
                    <Link to="/cart" className='header__shopping-cart-icon-burger-menu'><ShoppingCartIcon /></Link>
                </div>
            </Content>
        </header>
    )
};

export default Header;
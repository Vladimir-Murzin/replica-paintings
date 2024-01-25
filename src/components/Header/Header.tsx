import React from 'react';
import './Header.scss';
import { ReactComponent as FrameIcon } from '../../images/Frame.svg';
import { ReactComponent as ShoppingCartIcon } from '../../images/ShoppingCart.svg';
import Content from '../Content/Content.tsx';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className='header'>
            <Content>
                <div className='header__content'>
                    <div>
                        <Link to="/"><FrameIcon/></Link>
                    </div>
                    <div className='header__menu'>
                        <p>Репродукции</p>
                        <p>Новинки</p>
                        <p>О нас</p>
                        <Link to="/cart"><ShoppingCartIcon/></Link>
                    </div>
                </div>
            </Content>
        </header>
    )
};

export default Header;
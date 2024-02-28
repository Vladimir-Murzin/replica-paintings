import React, { useState } from 'react';
import './BurgerMenu.scss';
import Content from '../Content/Content.tsx';
import { ReactComponent as FrameIcon } from '../../images/Frame.svg';
import { ReactComponent as ShoppingCartIcon } from '../../images/ShoppingCart.svg';
import { Link } from "react-router-dom";
import buttonBurgerMenu from '../../images/buttonBurgerMenu.png';
import buttonBurgerMenuActive from '../../images/buttonBurgerMenuActive.png';


const BurgerMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState); 
    };

    return(
        <div className='burger-menu'>
            <button onClick={toggleMenu}>
                <img src={menuOpen ? buttonBurgerMenuActive : buttonBurgerMenu} alt="Изображение кнопки"/>
            </button>
            {menuOpen && (
                    <div className='burger-menu__menu-active'>
                        <Content>
                            <div className='burger-menu__logo'>
                                <Link to="/"><FrameIcon/></Link>
                            </div>
                            <button onClick={toggleMenu}>
                                <img src={menuOpen ? buttonBurgerMenuActive : buttonBurgerMenu} alt="Изображение кнопки"/>
                            </button>
                            <ul>
                                <li>Репродукции</li>
                                <li>Новинки</li>
                                <li>О нас</li>
                            </ul>
                        </Content>
                    </div>
            )}
        </div>
    );
};

export default BurgerMenu;

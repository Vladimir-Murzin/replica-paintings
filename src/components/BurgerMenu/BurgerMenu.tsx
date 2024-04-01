import React, { useState } from 'react';
import './BurgerMenu.scss';
import Content from '../Content/Content.tsx';
import { ReactComponent as FrameIcon } from '../../images/Frame.svg';
import { Link } from "react-router-dom";
import buttonBurgerMenu from '../../images/buttonBurgerMenu.png';
import buttonBurgerMenuActive from '../../images/buttonBurgerMenuActive.png';

const BurgerMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState); 
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return(
        <div className='burger-menu'>
            <button onClick={toggleMenu}>
                <img src={buttonBurgerMenu} alt="Burger menu"/>
            </button>
            {menuOpen && (
                <div className='burger-menu__menu-active'>
                    <Content>
                        <div className='burger-menu__logo'>
                            <Link to="/"><FrameIcon/></Link>
                        </div>
                        <button onClick={toggleMenu}>
                            <img src={buttonBurgerMenuActive} alt="Burger menu"/>
                        </button>
                        <ul>
                            <li><Link to="/#reproductions" onClick={closeMenu}>Репродукции</Link></li>
                            <li><Link to="/#novelties" onClick={closeMenu}>Новинки</Link></li>
                            <li><Link to="/#about" onClick={closeMenu}>О нас</Link></li>
                        </ul>
                    </Content>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;

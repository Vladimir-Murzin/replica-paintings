import React from 'react';
import './Footer.scss';
import Content from '../Content/Content.tsx';
import { ReactComponent as FrameIcon } from '../../images/Frame.svg';
import IconFacebook from '../../images/IconFacebook.png'
import IconInstagram from '../../images/IconInstagram.png'
import IconYouTube from '../../images/IconYouTube.png'

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <Content>
                <div className='footer__description'>
                    <div>
                        <FrameIcon />
                        <h6>+7 (999) 543-54-54</h6>
                        <p>Мастерская</p>
                    </div>
                    <div className='footer__menu'>
                        <div>
                            <h6>Репродукции</h6>
                            <p>Франция</p>
                            <p>Германия</p>
                            <p>Англия</p>
                        </div>
                        <div>
                            <h6>Новинки</h6>
                            <p>2021</p>
                            <p>2020</p>
                        </div>
                        <div>
                            <h6>О нас</h6>
                            <p>Художники</p>
                            <p>Менеджеры</p>
                        </div>
                    </div>
                    <div className='footer__social-media'>
                        <div className='footer__social-media-icons'>
                            <img src={IconFacebook} alt="IconFacebook"/>
                            <img src={IconInstagram} alt="IconInstagram"/>
                            <img src={IconYouTube} alt="IconYouTube"/>
                        </div>
                        <span>Ink. House ®</span>
                        <span>All rights reserved</span>
                    </div>
                </div>
            </Content>
        </div>
    )
};

export default Footer;
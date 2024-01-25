import React from 'react';
import './Layout.scss';
import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className='layout'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;
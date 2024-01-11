import React from 'react';
import './Content.scss';

interface IContentProps {
    children: React.ReactNode;
}

const Content: React.FC<IContentProps> = ({ children }) => {
    return(
        <div className='content-width'>{children}</div>
    )
}

export default Content;
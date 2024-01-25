import React from 'react';
import PresentationBlock from '../../components/PresentationBlock/PresentationBlock.tsx';
import Reproductions from '../../components/Reproductions/Reproductions.tsx';
import NewCollection from '../../components/NewCollection/NewCollection.tsx';
import TeamDescription from '../../components/TeamDescription/TeamDescription.tsx';

const HomePage: React.FC = () => {
    return (
        <>
            <PresentationBlock />
            <Reproductions />
            <NewCollection />
            <TeamDescription />
        </>
    )
};

export default HomePage;
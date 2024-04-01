import React, { useEffect, useRef } from 'react';
import PresentationBlock from '../../components/PresentationBlock/PresentationBlock.tsx';
import Reproductions from '../../components/Reproductions/Reproductions.tsx';
import NewCollection from '../../components/NewCollection/NewCollection.tsx';
import TeamDescription from '../../components/TeamDescription/TeamDescription.tsx';
import { useLocation } from 'react-router-dom';

const HomePage: React.FC = () => {   
    const location = useLocation();
    const anchors = {
      reproductions: useRef<HTMLDivElement>(null),
      novelties: useRef<HTMLDivElement>(null),
      about: useRef<HTMLDivElement>(null),
    };
  
    useEffect(()=> {
        const anchor = location.hash.slice(1);
        if (location.hash && anchor in anchors) {
            let elem = anchors[anchor];
            if (elem.current) {
                elem.current.scrollIntoView({behavior: "smooth"})
            }
        }
    }, [location, anchors]);
     
    return (
        <>
            <PresentationBlock />
            <Reproductions ref={anchors.reproductions} />
            <NewCollection ref={anchors.novelties}/>
            <TeamDescription ref={anchors.about}/>
        </>
    )
};

export default HomePage;
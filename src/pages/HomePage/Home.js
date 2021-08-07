import React from 'react';
import { InfoSection, Projects } from '../../components';
import { homeObjOne, homeObjTwo, projectsObj } from './Data';



const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Projects {...projectsObj} />
        </>
    )
}

export default Home

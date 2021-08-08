import React from 'react';
import { InfoSection, Projects, ContactSection, ResumeSection } from '../../components';
import { homeObjOne, homeObjTwo, projectsObj, homeObjContact, homeObjResume } from './Data';



const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Projects {...projectsObj} />
            <ContactSection {...homeObjContact} />
            <ResumeSection {...homeObjResume} />
        </>
    )
}

export default Home

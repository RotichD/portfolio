import React from 'react';
import { InfoSection, Projects, ContactSection, ResumeSection } from '../../components';
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject';
import { homeObjOne, homeObjTwo, projectsObj, homeObjContact, homeObjResume, featuredProjectObj } from './Data';



const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <FeaturedProject {...featuredProjectObj} />
            <Projects {...projectsObj} />
            <ContactSection {...homeObjContact} />
            <ResumeSection {...homeObjResume} />
        </>
    )
}

export default Home

import React from "react";
import { Container } from "../../globalStyles";
import { Heading, InfoSec } from "../InfoSection/InfoSection.elements";
import IndividualProject from "./IndividualProject";
import projectsData from "./projectsData.json";
import Grid from '@material-ui/core/Grid';

const Project = ({ lightBg, id }) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
          <Grid container spacing={3} align="center">
            <Grid item xs={12}>
              <Heading lightText>
                Projects
              </Heading>
            </Grid>
          {projectsData.map((card) => (
            <Grid item xs={12} md={6} lg={4}>
              <IndividualProject
                title={card.title}
                description={card.description}
                imgPath={card.imgPath}
                repoLink={card.repoLink}
                siteLink={card.siteLink}
              />
            </Grid>
          ))}
          </Grid>
        </Container>
      </InfoSec>
    </>
  );
};

export default Project;

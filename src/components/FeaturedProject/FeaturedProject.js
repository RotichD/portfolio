import React from "react";
import {
  InfoSec,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "../InfoSection/InfoSection.elements";
import { Container, Button } from "../../globalStyles";
import Grid from "@material-ui/core/Grid";
import { HashLink as Link } from "react-router-hash-link";

const FeaturedProject = ({
  lightBg,
  lightTopLine,
  lightTextDesc,
  lightText,
  buttonLabel,
  description,
  headline,
  topLine,
  primary,
  link,
  id,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
          <Grid container spacing={3} align='center'>
            <Grid item xs={12} md={6} align='start'>
              <InfoColumn>
                <TextWrapper
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "start",
                    width: "400px",
                  }}
                >
                  <Heading lightText={lightText}>{headline}</Heading>
                  <TopLine
                    lightTopLine={lightTopLine}
                    className='animate__animated animate__fadeInRight animate__delay-1s'
                  >
                    {topLine}
                  </TopLine>
                  <Subtitle
                    lightTextDesc={lightTextDesc}
                    textAlign={true}
                    className='animate__animated animate__fadeInRight animate__delay-1s'
                  >
                    {description}
                  </Subtitle>
                  <Link smooth to={link}>
                    <Button
                      big
                      fontBig
                      primary={primary}
                      className='animate__animated animate__fadeInLeft animate__delay-2s'
                    >
                      {buttonLabel}
                    </Button>
                  </Link>
                </TextWrapper>
              </InfoColumn>
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  paddingTop: "30px",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                  }}
                  src='https://www.youtube.com/embed/s-qnxqcxXOE'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </Container>
      </InfoSec>
    </>
  );
};

export default FeaturedProject;

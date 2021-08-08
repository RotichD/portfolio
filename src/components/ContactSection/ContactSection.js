import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Subby,
} from "./ContactSection.elements";
import { Container } from "../../globalStyles";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { FaAngellist}  from 'react-icons/fa'
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const ContactSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  lightText,
  description,
  headline,
  topLine,
  img,
  alt,
  start,
  id,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  <Grid container spacing={3}>
                    <Grid item>
                      <Link
                        href="https://www.linkedin.com/in/dylanrotich/"
                        rel="noopener"
                        target="_blank"
                      >
                        <GrLinkedin />
                      </Link>
                    </Grid>
                    <Grid item>
                    <Link
                        href="https://github.com/RotichD"
                        rel="noopener"
                        target="_blank"
                      >
                        <GrGithub />
                      </Link>
                    </Grid>
                    <Grid item>
                    <Link
                        href="https://angel.co/u/dylan-rotich"
                        rel="noopener"
                        target="_blank"
                      >
                        <FaAngellist />
                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Subby>
                        Don't hesitate to connect with me through LinkedIn or AngelList and shoot me a message.
                      </Subby>
                    </Grid>
                  </Grid>
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default ContactSection;

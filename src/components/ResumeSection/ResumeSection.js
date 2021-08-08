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
} from "../InfoSection/InfoSection.elements";
import { Container, Button } from "../../globalStyles";
import Link from "@material-ui/core/Link";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import Grid from "@material-ui/core/Grid";

const ResumeSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  lightText,
  buttonLabel,
  description,
  headline,
  topLine,
  primary,
  img,
  alt,
  start,
  link,
  id,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>
                  <Grid container spacing={3}>
                    <Grid item>
                      <DiMongodb />
                    </Grid>
                    <Grid item>
                      <FaReact />
                    </Grid>
                    <Grid item>
                      <FaNodeJs />
                    </Grid>
                    <Grid item>
                      <SiHtml5 />
                    </Grid>
                    <Grid item>
                      <SiCss3 />
                    </Grid>
                    <Grid item>
                      <SiJavascript />
                    </Grid>
                  </Grid>
                </TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link href={link} rel="noopener" target="_blank">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
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

export default ResumeSection;

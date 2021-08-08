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
} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";
import { HashLink as Link } from 'react-router-hash-link';

const InfoSection = ({
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
  id
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine} className="animate__animated animate__fadeInRight animate__delay-1s">{topLine}</TopLine>
                <Heading lightText={lightText} className="animate__animated animate__fadeInLeft">{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc} className="animate__animated animate__fadeInRight animate__delay-1s" >{description}</Subtitle>
                <Link smooth to={link}>
                  <Button big fontBig primary={primary} className="animate__animated animate__fadeInLeft animate__delay-2s">
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start} className="animate__animated animate__fadeIn animate__slow animate__slower">
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;

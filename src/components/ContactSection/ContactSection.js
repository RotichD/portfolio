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
import { Container, Button } from "../../globalStyles";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { FaAngellist}  from 'react-icons/fa'
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

const ContactSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  lightText,
  buttonLabel,
  description,
  primary,
  headline,
  topLine,
  img,
  alt,
  start,
  id,
}) => {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0xjzqhj', 'template_816ewjw', e.target, 'user_MGX9zi8sdOWkK6OgStBT5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

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
                      <form id="contact" className={classes.root} autoComplete="off" onSubmit={sendEmail}>
                        <TextField required id="name-input" label="Your Name" name="from_name" />
                        <TextField required type="email" id="subject-input" label="Your Email" name="from_email" />
                        <TextField required multiline id="message-input" label="Message Body" name="message" />
                        <Button big fontBig primary={primary} type="submit"  value="Submit">
                          {buttonLabel}
                        </Button>
                      </form>
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

import React from "react";
import { Container } from "../../globalStyles";
import { InfoSec } from "../InfoSection/InfoSection.elements";

const Project = ({ lightBg, id }) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container></Container>
      </InfoSec>
    </>
  );
};

export default Project;

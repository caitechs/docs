/**
 * 关于GameOne
 */
import React from "react";
import Translate from "@docusaurus/Translate";
import SectionContainer from "../sectionContainer";
import "./styles.scss";

export default function About() {
  return (
    <SectionContainer className="aboutContainer">
      <div className={"row"}>
        <div className={"profile"}>
          <img className={"portrait"} src="img/logo.png"></img>
          <div className={"portraitTitle"}>
            <h3 className={"name"}>GameOne</h3>
            <h3 className={"jobTitle"}>
              <Translate>
              Computer Automated Scoring OSS for IT
              </Translate>
            </h3>
          </div>
        </div>
        <div className={"description"}>
          <p>
            <Translate>
            GameOne is a machine automatic scoring system for competitions, exams and certifications in the fields of big data, artificial intelligence, cloud computing, software development, etc. The system supports the automatic scoring of IT system assessment through various ways such as SSH remote support, SandBox code execution, graphic recognition, OCR recognition, and text similarity recognition through plug-in mode.
            </Translate>
          </p>
          <p>
            <Translate>
            Our goal is to create an open platform that can support big data, artificial intelligence, cloud computing, blockchain, Internet of Things, robots and other IT systems to support automatic scoring in skills competitions, exams and certifications. More contributors are welcome to join this open source project, develop more automatic scoring plug-ins, and integrate container AI technology to enhance automatic scoring capabilities in code review, document evaluation and other aspects.
            </Translate>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

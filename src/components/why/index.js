/**
 * 为什么选择GameOne
 */
import React from "react";
import SectionContainer from "../sectionContainer";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

const reasons = [
  {
    title: <Translate>plug-ins</Translate>,
    content: (
      <Translate>
        Machine scoring plug-in, support multiple languages, support the same type of scoring a variety of ways, can detect virtual machine operation, program running, program code, and achieve automatic scoring function.
      </Translate>
    ),
  },
  {
    title: <Translate>Versatility</Translate>,
    content: (
      <Translate>
        Open source, free; General and the game has no binding; It can record the problem solving process log, and the log can be traced.
      </Translate>
    ),
  },
  {
    title: <Translate>Multiple Modes</Translate>,
    content: (
      <Translate>
        The competition supports individual competition and team competition, and supports passing mode and examination mode.
      </Translate>
    ),
  },

  
];

export default function Why() {
  return (
    <SectionContainer className={styles.whyContainer}>
      <h1>
        <Translate>Why GameOne</Translate>
      </h1>
      <div className={styles.reasonBoxContainer}>
        {reasons.map((item, index) => (
          <div key={index} className={styles.reasonBox}>
            <p className={styles.reasonTitle}>{item.title}</p>
            <div className={styles.reasonContent}>{item.content}</div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

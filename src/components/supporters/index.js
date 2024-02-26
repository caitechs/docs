/**
 * 支持者
 */
import React from "react";
import SectionContainer from "../sectionContainer";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "./index.scss";

/* const supportList = [
   {
    name: "Cloud AI Tech ",
    img_src: "img/supporters/cloudaitech-logo.png",
   
  },
  {
    name: "sict",
    img_src: "img/supporters/sict_logo.png",
    external_link: "https://www.sict.edu.cn/",
  },
  {
    name: "Lesson AI Tech",
    img_src: "img/supporters/lessonaitech-logo.png",
  },
  {
    name: "BEST Tech",
    img_src: "img/supporters/besttech-logo.png",
  },
  {
    name: "1st Thinking",
    img_src: "img/supporters/1stthinktech-logo.jpg",
    
  },
  {
    name: "szpu",
    img_src: "img/supporters/szpu_logo_red.png",
    external_link: "https://www.szpu.edu.cn//",
  },
  {
    name: "uvu",
    img_src: "img/supporters/uvu_logo.png",
    external_link: "http://www.uvu.edu.cn/",
  },
 
  {
    name: "caii",
    img_src: "img/supporters/caii_logo.png",
    external_link: "https://www.caii.edu.cn/",
  },
  {
    name: "ahcme",
    img_src: "img/supporters/ahcme_logo.png",
    external_link: "https://www.ahcme.edu.cn/",
  },
  {
    name: "wxit",
    img_src: "img/supporters/wxit_logo.png",
    external_link: "https://www.wxit.edu.cn//",
  },
  {
    name: "cqtbi",
    img_src: "img/supporters/cqtbi_logo.png",
    external_link: "https://www.cqtbi.edu.cn/",
  },
  {
    name: "wxstc",
    img_src: "img/supporters/wxstc_logo.jpg",
    external_link: "https://www.wxstc.cn/",
  },
  
]; */
const supportList = [
   {
    name: "Linux"
  },
  {
    name: "Hadoop"
  },
  {
    name: "Python"
  },
  {
    name: "Kubernetes"
  },
  {
    name: "Java"
  },
  {
    name: "Tensor Flow"
  },
  {
    name: "Spark"
  },
  {
    name: "PyTorch"
  },
  {
    name: "HBase"
  },
  {
    name: "Hive"
  }
];

export default function Supporters() {
  const { i18n } = useDocusaurusContext();
  return (
    <SectionContainer className={"supporterContainer"}>
      <div className={"supporters-flex"}>
        <div className={"supporters-flex-item"}>
          <h1 className={"supporters-title"}>
            <Translate>Join Us</Translate>
          </h1>
          <p className={"supporters-subtitle"}>
            <Translate>Community</Translate>
          </p>
          <div className={"supporters-module-box"}>
            {supportList.map((item, index) => (
              <p key={index} className={"supporters-module-item"}>{item.name}</p>
            ))}
          </div>
        </div>
        <div className={"supporters-flex-item"}>
          <img src="img/supporters/index.svg"/>
        </div>
      </div>
      {/* <div className={"supporters"}>
        <h1>
          <span style={{color: 'black'}}>
            <Translate>Join Us</Translate>
          </span>
          <span style={{color: '#1c77c8'}}>
            <Translate>Community</Translate>
          </span>
        </h1>
      </div>
      <div className={"supporterBoxContainer"}>
        {supportList.map((item, index) => (
          <div key={index} className="supporterBox">
            <div className="imgContainer">
              <Link to={item.external_link}>
                <img alt={item.name} src={item.img_src} />
              </Link>
            </div>
          </div>
        ))}
      </div> */}
    </SectionContainer>
  );
}

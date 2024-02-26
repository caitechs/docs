/**
 * 轮播图
 */
import React from "react";
import clsx from "clsx";
import Slider from "react-slick";
import Translate from "@docusaurus/Translate";
import { useHistory } from "@docusaurus/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

const sliderItems = [
  {
    title: <Translate>Welcome to GameOne</Translate>,
    subTitle: (
      <Translate>A Computer Automated Scoring System for IT Competition, Examination & certification</Translate>
    ),
    gitRepoUrl: "https://github.com/gameone/gameone",
    backgroundImage: "img/carousel/skillscomp.jpg",
    opacity: 0.4,
    align: "center",
  },
  {
    title: <Translate>IT Skills Competition</Translate>,
    subTitle: (
      <Translate>
        Support automatic scoring of competitions in big data, cloud computing, artificial intelligence, blockchain, software development and other fields.
      </Translate>
    ),
    backgroundImage: "img/carousel/skillscomp-it.jpg",
    opacity: 0.5,
    align: "center",
  },
];

const SlideItem = (props) => {
  const {
    title,
    subTitle,
    button,
    backgroundImage,
    gitRepoUrl,
    align = "center",
    opacity = 0.5,
  } = props;

  const history = useHistory();

  return (
    <div
      className={clsx("slick-item", align)}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})),url(${backgroundImage})`,
      }}
    >
      <div className={clsx("title")}>
        <div className={clsx("main-title")}>{title}</div>
        <div className={clsx("sub-title")}>{subTitle}</div>
      </div>
      
      {button && (
        <div className={clsx("button")}>
          <a onClick={() => history.push(button.url)}>{button.text}</a>
        </div>
      )}
    </div>
  );
};

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={"slider-container"}>
      <Slider {...settings}>
        {sliderItems.map((i, index) => (
          <SlideItem key={index} {...i} />
        ))}
      </Slider>
    </div>
  );
};

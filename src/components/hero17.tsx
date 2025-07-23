import React, { Fragment } from "react";

import "./hero17.css";

const Hero17 = (props: Props) => {
  props = {
    ...Hero17.defaultProps,
    ...props,
  };
  return (
    <div id="home" className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text7">
                  Innovative Engineering Solutions for a Connected World
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Welcome to our multidisciplinary engineering company
                  specializing in advanced communication systems, power
                  solutions, software development, and more. We deliver
                  cutting-edge solutions to meet your engineering needs.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text6">Contact Us</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text5">Learn More</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2"></div>
      </div>
    </div>
  );
};

Hero17.defaultProps = {
  image3Src:
    "https://images.unsplash.com/photo-1669154309624-8dce6f451c9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2N3w&ixlib=rb-4.1.0&q=80&w=1080",
  image8Alt: "Hero Image",
  image2Src:
    "https://images.unsplash.com/photo-1649451844864-52b8f2f9f46d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OHw&ixlib=rb-4.1.0&q=80&w=1080",
  image6Alt: "Hero Image",
  image11Src:
    "https://images.unsplash.com/photo-1695756258030-c775f51ba26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OXw&ixlib=rb-4.1.0&q=80&w=1080",
  image5Alt: "Hero Image",
  image1Alt: "Engineering Solutions Image",
  image7Src:
    "https://images.unsplash.com/photo-1593040011198-4002c38a1e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OXw&ixlib=rb-4.1.0&q=80&w=1080",
  image7Alt: "Hero Image",
  image12Alt: "Hero Image",
  image2Alt: "Communication Systems Image",
  image6Src:
    "https://images.unsplash.com/photo-1669024401193-1728ef303e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OXw&ixlib=rb-4.1.0&q=80&w=1080",
  image12Src:
    "https://images.unsplash.com/photo-1688927415965-f0eb108432bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM3MHw&ixlib=rb-4.1.0&q=80&w=1080",
  image3Alt: "Hero Image",
  image9Src:
    "https://images.unsplash.com/photo-1653548147289-535d5ff31903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM3MHw&ixlib=rb-4.1.0&q=80&w=1080",
  image11Alt: "Hero Image",
  action2: undefined,
  action1: undefined,
  image8Src:
    "https://images.unsplash.com/photo-1716009441550-463ee99f80f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM3MXw&ixlib=rb-4.1.0&q=80&w=1080",
  image5Src:
    "https://images.unsplash.com/photo-1712238107642-663e1980b874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM3MXw&ixlib=rb-4.1.0&q=80&w=1080",
  image4Src:
    "https://images.unsplash.com/photo-1633437542261-8e1bd31d68f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM3MXw&ixlib=rb-4.1.0&q=80&w=1080",
  image10Alt: "Hero Image",
  image4Alt: "Hero Image",
  heading1: undefined,
  content1: undefined,
  image10Src:
    "https://images.unsplash.com/photo-1635707109888-5cb386aabd0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM3Mnw&ixlib=rb-4.1.0&q=80&w=1080",
  image9Alt: "Hero Image",
  image1Src:
    "https://images.unsplash.com/photo-1669172973375-b85a97a91fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM3Mnw&ixlib=rb-4.1.0&q=80&w=1080",
};

interface Props {
  image3Src: string;
  image8Alt: string;
  image2Src: string;
  image6Alt: string;
  image11Src: string;
  image5Alt: string;
  image1Alt: string;
  image7Src: string;
  image7Alt: string;
  image12Alt: string;
  image2Alt: string;
  image6Src: string;
  image12Src: string;
  image3Alt: string;
  image9Src: string;
  image11Alt: string;
  action2: React.ReactNode;
  action1: React.ReactNode;
  image8Src: string;
  image5Src: string;
  image4Src: string;
  image10Alt: string;
  image4Alt: string;
  heading1: React.ReactNode;
  content1: React.ReactNode;
  image10Src: string;
  image9Alt: string;
  image1Src: string;
}

export default Hero17;

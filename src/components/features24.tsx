import React, { useState, Fragment } from "react";

import "./features24.css";

const Features24 = (props: Props) => {
  props = {
    ...Features24.defaultProps,
    ...props,
  };
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features24-text4">
                      Advanced Communication Systems
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text5">
                      Cutting-edge Communication Solutions
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features24-text6">
                      Power Systems Engineering
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text3">
                      Power Systems Solutions
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features24-text2">
                      Software Development
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text1">
                      Innovative Software Development
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Features24.defaultProps = {
  feature1ImgAlt: "Telecommunication Services",
  feature3Description: undefined,
  feature3Title: undefined,
  feature3ImgSrc:
    "https://images.unsplash.com/photo-1639755507638-e34150b56db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OHw&ixlib=rb-4.1.0&q=80&w=1080",
  feature1ImgSrc:
    "https://images.unsplash.com/photo-1650043996692-a51e3d749766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OHw&ixlib=rb-4.1.0&q=80&w=1080",
  feature2Description: undefined,
  feature1Title: undefined,
  feature3ImgAlt: "Software Development Image",
  feature1Description: undefined,
  feature2ImgSrc:
    "https://images.unsplash.com/photo-1592318348310-f31b61a931c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OXw&ixlib=rb-4.1.0&q=80&w=1080",
  feature2ImgAlt: "Power Systems Image",
  feature2Title: undefined,
};

interface Props {
  feature1ImgAlt: string;
  feature3Description: React.ReactNode;
  feature3Title: React.ReactNode;
  feature3ImgSrc: string;
  feature1ImgSrc: string;
  feature2Description: React.ReactNode;
  feature1Title: React.ReactNode;
  feature3ImgAlt: string;
  feature1Description: React.ReactNode;
  feature2ImgSrc: string;
  feature2ImgAlt: string;
  feature2Title: React.ReactNode;
}

export default Features24;

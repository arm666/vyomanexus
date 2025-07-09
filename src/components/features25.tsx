import React, { useState, Fragment } from "react";

import "./features25.css";

const Features25 = (props: Props) => {
  props = {
    ...Features25.defaultProps,
    ...props,
  };
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text4">
                      Specialized Engineering Services
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text2">
                      We offer a wide range of specialized engineering services
                      including telecommunication, power systems, software
                      development, MATLAB design, electronic systems, and
                      firefighting and rescue equipment.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text3">
                      Advanced Communication Systems
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text5">
                      Our advanced communication systems are designed to enhance
                      connectivity and efficiency in various industries.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text6">
                      Integrated Safety Solutions
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text1">
                      We provide integrated safety solutions to ensure the
                      well-being of individuals and assets through cutting-edge
                      technology.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  );
};

Features25.defaultProps = {
  feature3Description: undefined,
  feature1ImgAlt: "Image depicting specialized engineering services",
  feature1Description: undefined,
  feature3ImgAlt: "Image depicting integrated safety solutions",
  feature2Title: undefined,
  feature1Title: undefined,
  feature1ImgSrc:
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OHw&ixlib=rb-4.1.0&q=80&w=1080",
  feature3ImgSrc:
    "https://images.unsplash.com/photo-1649442279055-2f18ba0185c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OXw&ixlib=rb-4.1.0&q=80&w=1080",
  feature2Description: undefined,
  feature3Title: undefined,
  feature2ImgAlt: "Image depicting advanced communication systems",
  feature2ImgSrc:
    "https://images.unsplash.com/photo-1650705858311-a6415dcd907c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OXw&ixlib=rb-4.1.0&q=80&w=1080",
};

interface Props {
  feature3Description: React.ReactNode;
  feature1ImgAlt: string;
  feature1Description: React.ReactNode;
  feature3ImgAlt: string;
  feature2Title: React.ReactNode;
  feature1Title: React.ReactNode;
  feature1ImgSrc: string;
  feature3ImgSrc: string;
  feature2Description: React.ReactNode;
  feature3Title: React.ReactNode;
  feature2ImgAlt: string;
  feature2ImgSrc: string;
}

export default Features25;

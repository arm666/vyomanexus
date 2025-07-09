import React, { Fragment } from "react";

import "./contact10.css";

const Contact10 = (props: Props) => {
  props = {
    ...Contact10.defaultProps,
    ...props,
  };
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text18">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text16">
                    Get in touch with us for any inquiries or to discuss your
                    project needs.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text20">Headquarters</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    123 Engineering Street, Cityville, Country
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text21">Branch Office</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    456 Innovation Avenue, Townsville, Country
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact10.defaultProps = {
  content1: undefined,
  location2ImageSrc:
    "https://images.unsplash.com/photo-1552926738-05d2482b9c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2N3w&ixlib=rb-4.1.0&q=80&w=1080",
  location1ImageSrc:
    "https://images.unsplash.com/photo-1640041124903-ebf2bb5933a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA3MTM2OHw&ixlib=rb-4.1.0&q=80&w=1080",
  location1Description: undefined,
  location2ImageAlt: "Branch Office Image",
  heading1: undefined,
  location2Description: undefined,
  location1ImageAlt: "Headquarters Image",
  location1: undefined,
  location2: undefined,
};

interface Props {
  content1: React.ReactNode;
  location2ImageSrc: string;
  location1ImageSrc: string;
  location1Description: React.ReactNode;
  location2ImageAlt: string;
  heading1: React.ReactNode;
  location2Description: React.ReactNode;
  location1ImageAlt: string;
  location1: React.ReactNode;
  location2: React.ReactNode;
}

export default Contact10;

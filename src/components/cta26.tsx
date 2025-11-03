import React, { Fragment } from "react";

import "./cta26.css";

const CTA26 = (props: Props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text4">
                        Ready to take your projects to the next level?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        Contact us today to discuss how our specialized
                        engineering services can benefit your business.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <a href="#contact" className="thq-button-filled cta26-button">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text6">Get in touch</span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CTA26.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
};

interface Props {
  heading1: React.ReactNode;
  content1: React.ReactNode;
  action1: React.ReactNode;
}

export default CTA26;

import React, { Fragment } from "react";

import "./footer4.css";

const Footer4 = (props: Props) => {
  props = {
    ...Footer4.defaultProps,
    ...props,
  };
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text16">Engineering Services</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text18">Communication Systems</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text15">Safety Solutions</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text19">Contact Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text14">About Us</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">
                © 2025 VYOMA NEXUS PVT. LTD
              </span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text21">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text17">Terms and Conditions</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text20">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer4.defaultProps = {
  link5: undefined,
  link3: undefined,
  link1: undefined,
  termsLink: undefined,
  link2: undefined,
  link4: undefined,
  logoAlt: "Company Logo",
  cookiesLink: undefined,
  logoSrc: "/logo.png",
  privacyLink: undefined,
};

interface Props {
  link5: React.ReactNode;
  link3: React.ReactNode;
  link1: React.ReactNode;
  termsLink: React.ReactNode;
  link2: React.ReactNode;
  link4: React.ReactNode;
  logoAlt: string;
  cookiesLink: React.ReactNode;
  logoSrc: string;
  privacyLink: React.ReactNode;
}
export default Footer4;

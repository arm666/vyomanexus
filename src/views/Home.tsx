import { Fragment } from "react";

import Navbar8 from "../components/navbar8";
import Hero17 from "../components/hero17";
import Features24 from "../components/features24";
import CTA26 from "../components/cta26";
import Features25 from "../components/features25";
import Steps2 from "../components/steps2";
import Testimonial17 from "../components/testimonial17";
import Contact10 from "../components/contact10";
import Footer4 from "../components/footer4";
import "./home.css";
import AboutUs from "../components/AboutUs";
import { COMPANY_INFO } from "../constants";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Get in touch with us for innovative solutions
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Get Started</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to our multidisciplinary engineering company
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Explore our specialized engineering services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">About</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">About Us</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our company and values
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Contact Us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Contact Us</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Innovative Engineering Solutions for a Connected World
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Welcome to our multidisciplinary engineering company specializing
              in advanced communication systems, power solutions, software
              development, and more. We deliver cutting-edge solutions to meet
              your engineering needs.
            </span>
          </Fragment>
        }
      ></Hero17>
      <AboutUs />
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Innovative Software Development
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Software Development</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Power Systems Solutions</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Advanced Communication Systems</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Cutting-edge Communication Solutions
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Power Systems Engineering</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to take your projects to the next level?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact us today to discuss how our specialized engineering
              services can benefit your business.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get in touch</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              We provide integrated safety solutions to ensure the well-being of
              individuals and assets through cutting-edge technology.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              We offer a wide range of specialized engineering services
              including telecommunication, power systems, software development,
              MATLAB design, electronic systems, and firefighting and rescue
              equipment.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Advanced Communication Systems</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">
              Specialized Engineering Services
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Our advanced communication systems are designed to enhance
              connectivity and efficiency in various industries.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Integrated Safety Solutions</span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Schedule a meeting with our team to discuss your specific
              engineering needs and project requirements.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              We will efficiently implement the designed solution, conduct
              thorough testing to ensure functionality and safety compliance.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Customized Solution Design</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Our experts will create a tailored engineering solution that
              integrates advanced communication systems, safety measures, and
              specialized services.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Initial Consultation</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Implementation and Testing</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Provide comprehensive training to your team on how to operate and
              maintain the integrated systems. Ongoing support and maintenance
              services are also available.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Client Training and Support</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">CTO, Innovate Tech Co.</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">CEO, Marbi Tech Industries</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Er. Suraj Paudel</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Michael Brown</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              The engineering team&apos;s software development skills are
              exceptional. They delivered a customized solution that perfectly
              met our requirements and exceeded our expectations.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Emily Johnson</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">
              Director, Rescue Operations Inc.
            </span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Sarah Lee</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              We have been working with the engineering team for over a year
              now, and their expertise in communication systems has truly
              transformed our operations. Their dedication to quality and
              innovation is unmatched.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">COO, Secure Systems Ltd.</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              Working with this engineering company has been a game-changer for
              our business. Their integrated safety solutions have not only
              improved our workplace safety but also increased efficiency.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Client Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              I highly recommend this engineering company for their expertise in
              power systems. They provided us with cost-effective solutions that
              significantly improved our energy efficiency.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              The firefighting and rescue equipment supplied by this company is
              top-notch. It has helped us respond to emergencies more
              effectively and protect lives.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Get in touch with us for any inquiries or to discuss your project
              needs.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">{COMPANY_INFO.email}</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209"></span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Have an Idea ? Contact Us</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Safety Solutions</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">Engineering Services</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms and Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Communication Systems</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  );
};

export default Home;

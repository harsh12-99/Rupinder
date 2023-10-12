import React from "react";
import Modal from "react-modal";
import Testimonial from "./Testimonial";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
// import Resume from "./Resume";
import Skills from "./Skills";
import Certificate from "../service/Certificate";

Modal.setAppElement("#__next");

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                {/* <span>About</span> */}
                <h3>About Us</h3>
              </div>
            </div>
          </div>

          <Intro />
          
      <div className="tokyo_tm_partners">
        <div className="container">
          <div className="tokyo_section_title">
          </div>
          <div className="">
            <ul>
              
              <Certificate/>
              
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="tokyo_tm_partners">
        <div className="container">
          <div className="tokyo_section_title">
          </div>
          <div className="">
            <ul>
              
              <PersonalInfo/>
              
            </ul>
          </div>
        </div>
      </div> */}
          {/* End personal info */}

          <div className="tokyo_tm_button" data-position="left">
            {/* <a href="/img/cv.pdf" download>
              <span>Download CV</span>
            </a> */}
            {/* <a href="" >
              <span>Download CV</span>
            </a> */}
          </div>
        </div>
      </div>
      

      {/* <div className="tokyo_tm_progressbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>
          
        </div>
        
      </div> */}
      

      {/* <div className="tokyo_tm_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div> */}

      {/* <div className="tokyo_tm_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div> */}
      
      {/* <div className="tokyo_tm_testimonials">
        <div className="container">
          <div className="tokyo_section_title">
            <h3>Testimonials</h3>
          </div>
          <div className="list">
            <Testimonial />
          </div>
        </div>
      </div> */}
     

      
    </>
  );
};

export default AboutMain;

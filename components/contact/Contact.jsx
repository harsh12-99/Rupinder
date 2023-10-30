import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonalInfo from "../about/PersonalInfo";
import Seo from "../Seo";
import Map from "../Map";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_key",
        "template_key",
        form.current,
        "public key"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error("Ops Message Not Sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
    <Seo pageTitle={"Contact"} />
      <div className="container">
        <div className="tokyo_tm_contact">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Contact Us</span>
                 <h3>Get in Touch</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          {/* <Map /> */}
          {/* MENU WRAP */}

          <div className="fields">
            <form
              className="contact_form"
              id="myForm"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="first">
                <ul>
                  <li>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  {/* END FIRST NAME */}

                  <li>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  {/* END EMAIL */}

                  <li>
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </li>
                  {/* END SUBJECT MESSAGE */}
                </ul>
              </div>
              <div className="tokyo_tm_button">
                <button type="submit" className="ib-button" style={{marginRight:20}}>
                  Send Message
                </button>
                <a href="https://www.google.com/search?q=L2+191+193%2C+Liverpool+Street%2C+Hobart+TAS+7000+Australia&sca_esv=572820686&rlz=1C1GCEB_enIN1023IN1023&sxsrf=AM9HkKkrTIEJ_sPvHBA_FDhvfr9-YF2PFQ%3A1697103203340&ei=Y70nZYiyFKPd2roP58erkAk&ved=0ahUKEwjI79OMmvCBAxWjrlYBHefjCpIQ4dUDCBA&uact=5&oq=L2+191+193%2C+Liverpool+Street%2C+Hobart+TAS+7000+Australia&gs_lp=Egxnd3Mtd2l6LXNlcnAiN0wyIDE5MSAxOTMsIExpdmVycG9vbCBTdHJlZXQsIEhvYmFydCBUQVMgNzAwMCBBdXN0cmFsaWEyBBAjGCdI3RRQtgZYhQxwAXgAkAEAmAHpAaABugmqAQUwLjYuMbgBA8gBAPgBAcICChAjGK4CGLADGCfiAwQYASBBiAYBkAYB&sclient=gws-wiz-serp" class="template-component-google-map-button">
								  <span>Go To Map</span>
								</a>
              </div>
             
              {/* END SUBMIT BUTTON */}
            </form>
            {/* END FORM */}
          </div>
          {/* END FIELDS */}
        </div>
        
      </div>
      {/* END COTACT */}
      <div className="tokyo_tm_short_info" style={{marginLeft:50}}>
        <PersonalInfo />
      </div>
      
    </>
  );
};

export default Contact;

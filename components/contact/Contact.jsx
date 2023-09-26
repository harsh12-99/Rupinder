import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "../Map";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n4mkhz9",
        "template_ugoztxr",
        form.current,
        "user_vYmDSd9PwIuRXUQEDjYwN"
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
                <a href="https://www.google.com/search?q=melbourne+australia+map&sca_esv=566241734&sxsrf=AM9HkKkHhkaSZR4KyZcPFmraMP9jMZMMmA%3A1695034328305&source=hp&ei=2CsIZeCYD_Dq2roPrYmnuA4&iflsig=AO6bgOgAAAAAZQg56C06fztQLDco9v9u6UG6Xm8sTNd5&oq=Me&gs_lp=Egdnd3Mtd2l6IgJNZSoCCAAyBxAjGIoFGCcyBxAjGIoFGCcyDRAuGIoFGMcBGK8BGCcyDhAAGIoFGLEDGIMBGJECMg4QABiKBRixAxiDARiRAjILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAuGIoFGLEDGIMBSMQiUOsMWPoOcAF4AJABAJgB6AKgAbcFqgEDMy0yuAEByAEA-AEBqAIKwgIHECMY6gIYJ8ICBBAjGCfCAggQABiKBRiRAsICCxAuGIAEGLEDGIMBwgILEAAYigUYsQMYgwE&sclient=gws-wiz" class="template-component-google-map-button">
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
      
    </>
  );
};

export default Contact;

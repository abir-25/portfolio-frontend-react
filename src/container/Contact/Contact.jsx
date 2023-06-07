import React, { useEffect, useState, useRef } from "react";
import "./Contact.scss";
import { Navbar } from "../../components";
import linkedIn from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import email from "../../assets/email.png";
import mobile from "../../assets/mobile.png";
import dribble from "../../assets/dribble.png";
import instagram from "../../assets/instagram.png";
import behance from "../../assets/behance.png";
import youtube from "../../assets/youtube.png";
import showwcase from "../../assets/showwcase.png";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [location, setLocation] = useState();
  const [whatsApp, setWhatsApp] = useState(false);
  const form = useRef();

  useEffect(() => {
    setLocation(JSON.parse(localStorage.getItem("geo-location")));
  }, []);

  const handleConnectOptions = (e) => {
    if (e.target.value === "whatsapp") {
      setWhatsApp(true);
    } else {
      setWhatsApp(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i43dndl",
        "template_d4bu2y6",
        form.current,
        "ukEuKfXuaxXzl5Yvc"
      )
      .then(
        (result) => {
          toast.success("Successfully sent request !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          e.target.reset();
        },
        (error) => {
          toast.error("Message not sent!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="contact-container app__whitebg">
        <div className="contact-section">
          <div className="visible-desktop hidden-mobile" id="visible-desktop">
            <div className="contact-options">
              <a
                href="mailto:mahmud.abir025@gmail.com"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={email} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>mahmud.abir025@gmail.com</p>
                  </div>
                </div>
              </a>
              <a
                href="tel:+880 1828-448101"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={mobile} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>+880 1828-448101</p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.showwcase.com/mahmudabir025977"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={showwcase} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>showwcase/mahmud.abir</p>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/abir-25"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={github} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>github/abir-25</p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.facebook.com/AbirMahmud101/"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>facebook/abirmahmud101</p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/abirmahmud25/"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={linkedIn} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>linked/abirmahmud25</p>
                  </div>
                </div>
              </a>
              <a
                href="https://twitter.com/TheAbirMahmud"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={twitter} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>@TheAbirMahmud</p>
                  </div>
                </div>
              </a>
              <a
                href="https://dribbble.com/abir-25"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={dribble} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>dribbble.com/abir-25</p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/_abir_mahmud_/"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={instagram} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>instagram.com/_abir_mahmud_</p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.behance.net/onlineschool1"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={behance} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>behance.net/onlineschool1</p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.youtube.com/c/OnlineSchoolAbir"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img src={youtube} alt="" />
                  </div>
                  <div className="contact-option-details">
                    <p>youtube.com/OnlineSchoolAbir</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-form-wrap">
            <h1>
              Lets connect today to discuss your venture and potential
              collaborations.
            </h1>
            <div className="my-form">
              <form onSubmit={sendEmail} ref={form}>
                <div className="grid-1x2">
                  <div className="input-controls">
                    <label htmlFor="name">
                      Your Name<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      required=""
                      className="new-form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="input-controls">
                    <label htmlFor="email">
                      Your Email<span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      required=""
                      className="new-form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="grid-1x2">
                  <div className="input-controls">
                    <label htmlFor="name">
                      What service you are interested in
                    </label>
                    <input
                      type="text"
                      className="new-form-control"
                      placeholder="e.g Website Frontend or Website Backend or REST API"
                      id="services"
                      name="services"
                    />
                  </div>
                  <div className="input-controls">
                    <label htmlFor="email">
                      Budget Range (in
                      {location?.country_code === "BD" ? "BDT" : "USD"})
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      required=""
                      className="new-form-control"
                      placeholder={`e.g ${
                        location?.country_code === "BD"
                          ? "30k-40k BDT"
                          : "4k-5k USD"
                      }`}
                      id="budget"
                      name="budget"
                    />
                  </div>
                </div>
                <div className="input-controls margin-bottom-30">
                  <label htmlFor="name">
                    Please tell a bit about yourself &amp; your project
                  </label>
                  <textarea
                    className="new-form-control"
                    id="message"
                    name="message"
                    placeholder="Please share information about your project that can help me prepare for our meeting."
                  ></textarea>
                </div>
                <div className="input-controls margin-bottom-30">
                  <label htmlFor="name">
                    How would you like to connect
                    <span className="required">*</span>
                  </label>
                  <select
                    className="new-form-control"
                    required=""
                    id="connectOptions"
                    name="connectOptions"
                    onChange={handleConnectOptions}
                  >
                    <option>Choose an option to connect</option>
                    <option value="zoom">I want to schedule a zoom call</option>
                    <option value="meet">
                      I want to schedule a Meeting on Google Meet
                    </option>
                    <option value="whatsapp">
                      I want to connect via WhatsApp
                    </option>
                    <option value="email">
                      I want to connect via Email Only
                    </option>
                  </select>
                </div>
                {whatsApp && (
                  <div className="input-controls">
                    <label htmlFor="whatsapp">Please share your WhatsApp</label>
                    <input
                      type="number"
                      className="new-form-control"
                      placeholder="Your whatsapp number with country code"
                      id="whatsapp"
                      name="whatsapp"
                    />
                  </div>
                )}

                <div className="grid-1x2 margin-top-60">
                  <div className="input-controls">
                    <input
                      className="btn btn-submit"
                      type="submit"
                      value="Send Contact Request Now"
                    />
                  </div>
                </div>
              </form>
              <div className="visible-mobile" id="visible-mobile">
                <div className="contact-options">
                  <h3 className="font-18 margin-bottom-30 margin-top-50">
                    Quickly Connect with Abir Mahmud
                  </h3>
                  <a
                    href="mailto:mahmud.abir025@gmail.com"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={email} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>mahmud.abir025@gmail.com</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+880 1828-448101"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={mobile} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>+880 1828-448101</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.showwcase.com/mahmudabir025977"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={showwcase} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>showwcase/mahmud.abir</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://github.com/abir-25"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={github} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>github/abir-25</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/AbirMahmud101/"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={facebook} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>facebook/abirmahmud101</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abirmahmud25/"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={linkedIn} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>linked/abirmahmud25</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/TheAbirMahmud"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={twitter} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>@TheAbirMahmud</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://dribbble.com/abir-25"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={dribble} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>dribbble.com/abir-25</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/_abir_mahmud_/"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={instagram} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>instagram.com/_abir_mahmud_</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.behance.net/onlineschool1"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={behance} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>behance.net/onlineschool1</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/c/OnlineSchoolAbir"
                    target="_blank"
                    className="contact-option"
                  >
                    <div className="contact-option-wrap">
                      <div className="contact-option-icon">
                        <img src={youtube} alt="" />
                      </div>
                      <div className="contact-option-details">
                        <p>youtube.com/OnlineSchoolAbir</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

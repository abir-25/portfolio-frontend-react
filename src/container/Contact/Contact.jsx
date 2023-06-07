import React, { useEffect, useState } from "react";
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

const Contact = () => {
  const [location, setLocation] = useState();
  const [whatsApp, setWhatsApp] = useState(false);

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

  return (
    <>
      <Navbar />
      <div className="contact-container app__whitebg">
        <div className="contact-section">
          <div className="visible-desktop hidden-mobile">
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
            <div class="my-form">
              <form method="post" id="contactForm">
                <div class="contactFormRes"></div>
                <div class="calendlyoverlay" style={{ display: "none" }}>
                  <div class="closeOverlayBox">
                    <img
                      src="https://www.arshakir.com/images/close2.svg"
                      alt="Close"
                    />
                  </div>
                  <div class="calendlyoverlayiframewrap">
                    <iframe src=""></iframe>
                  </div>
                </div>

                <div class="grid-1x2">
                  <div class="input-controls">
                    <label for="name">
                      Your Name<span class="required">*</span>
                    </label>
                    <input
                      type="text"
                      required=""
                      class="new-form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div class="input-controls">
                    <label for="email">
                      Your Email<span class="required">*</span>
                    </label>
                    <input
                      type="email"
                      required=""
                      class="new-form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
                <div class="grid-1x2">
                  <div class="input-controls">
                    <label for="name">What service you are interested in</label>
                    <input
                      type="text"
                      class="new-form-control"
                      placeholder="e.g Website Frontend or Website Backend or REST API"
                      id="services"
                      name="services"
                    />
                  </div>
                  <div class="input-controls">
                    <label for="email">
                      Budget Range (in
                      {location?.country_code === "BD" ? "BDT" : "USD"})
                      <span class="required">*</span>
                    </label>
                    <input
                      type="text"
                      required=""
                      class="new-form-control"
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
                <div class="input-controls margin-bottom-30">
                  <label for="name">
                    Please tell a bit about yourself &amp; your project
                  </label>
                  <textarea
                    class="new-form-control"
                    id="message"
                    name="message"
                    placeholder="Please share information about your project that can help me prepare for our meeting."
                  ></textarea>
                </div>
                <div class="input-controls margin-bottom-30">
                  <label for="name">
                    How would you like to connect<span class="required">*</span>
                  </label>
                  <select
                    class="new-form-control"
                    required=""
                    id="connectoptions"
                    name="connectoptions"
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
                  <div class="input-controls">
                    <label for="whatsapp">Please share your WhatsApp</label>
                    <input
                      type="text"
                      class="new-form-control"
                      placeholder="Your whatsapp number with country code"
                      id="whatsapp"
                      name="whatsapp"
                    />
                  </div>
                )}

                <div style={{ display: "none" }}>
                  <input type="submit" />
                </div>
                <div class="grid-1x2 margin-top-60">
                  <div class="input-controls">
                    <a href="#" class="btn btn-submit" id="submitbtn">
                      Send Contact Request Now
                    </a>
                  </div>
                </div>
              </form>
              <div class="visible-mobile">
                <div class="contact-options">
                  <h3 class="font-18 margin-bottom-30 margin-top-50">
                    Quickly Connect with AR Shakir
                  </h3>
                  <a
                    href="mailto:mahmud.abir025@gmail.com"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img src={email} alt="" />
                      </div>
                      <div class="contact-option-details">
                        <p>mahmud.abir025@gmail.com</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+880 1828-448101"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img src={mobile} alt="" />
                      </div>
                      <div class="contact-option-details">
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
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img src={linkedIn} alt="" />
                      </div>
                      <div class="contact-option-details">
                        <p>linked/abirmahmud25</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/TheAbirMahmud"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img src={twitter} alt="" />
                      </div>
                      <div class="contact-option-details">
                        <p>@TheAbirMahmud</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://dribbble.com/abir-25"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img src={dribble} alt="" />
                      </div>
                      <div class="contact-option-details">
                        <p>dribbble.com/abir-25</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/_abir_mahmud_/"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img src={instagram} alt="" />
                      </div>
                      <div class="contact-option-details">
                        <p>instagram.com/_abir_mahmud_</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.behance.net/onlineschool1"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img src={behance} alt="" />
                      </div>
                      <div class="contact-option-details">
                        <p>behance.net/onlineschool1</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/c/OnlineSchoolAbir"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img src={youtube} alt="" />
                      </div>
                      <div class="contact-option-details">
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

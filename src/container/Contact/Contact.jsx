import React from "react";
import "./Contact.scss";
import { Navbar } from "../../components";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container app__whitebg">
        <div className="contact-section">
          <div className="visible-desktop hidden-mobile">
            <div className="contact-options">
              <a
                href="mailto:hello@arshakir.com"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img
                      src="https://www.arshakir.com/images/icon-email.svg"
                      alt=""
                    />
                  </div>
                  <div className="contact-option-details">
                    <p>hello@arshakir.com</p>
                  </div>
                </div>
              </a>
              <a
                href="tel:+1 (909)  978 7623"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img
                      src="https://www.arshakir.com/images/icon-phone.svg"
                      alt=""
                    />
                  </div>
                  <div className="contact-option-details">
                    <p>+1 (909) 978 7623</p>
                  </div>
                </div>
              </a>
              <a
                href="https://t.me/arshakir"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img
                      src="https://www.arshakir.com/images/icon-telegram.svg"
                      alt=""
                    />
                  </div>
                  <div className="contact-option-details">
                    <p>@arshakir</p>
                  </div>
                </div>
              </a>
              <a
                href="https://join.skype.com/invite/l6FxrNMwMIl5"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img
                      src="https://www.arshakir.com/images/icon-skype.svg"
                      alt=""
                    />
                  </div>
                  <div className="contact-option-details">
                    <p>shahsawar260</p>
                  </div>
                </div>
              </a>
              <a
                href="https://dribbble.com/arshakir"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img
                      src="https://www.arshakir.com/images/icon-dribbble.svg"
                      alt=""
                    />
                  </div>
                  <div className="contact-option-details">
                    <p>dribbble.com/arshakir</p>
                  </div>
                </div>
              </a>
              <a
                href="https://instagram.com/arshakirpk"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img
                      src="https://www.arshakir.com/images/icon-instagram.svg"
                      alt=""
                    />
                  </div>
                  <div className="contact-option-details">
                    <p>instagram.com/arshakirpk</p>
                  </div>
                </div>
              </a>
              <a
                href="https://behance.net/arshakir"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img
                      src="https://www.arshakir.com/images/icon-behance.svg"
                      alt=""
                    />
                  </div>
                  <div className="contact-option-details">
                    <p>behance.net/arshakir</p>
                  </div>
                </div>
              </a>
              <a
                href="https://youtube.com/MrShakir260"
                target="_blank"
                className="contact-option"
              >
                <div className="contact-option-wrap">
                  <div className="contact-option-icon">
                    <img
                      src="https://www.arshakir.com/images/icon-youtube.svg"
                      alt=""
                    />
                  </div>
                  <div className="contact-option-details">
                    <p>youtube.com/MrShakir260</p>
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
                      fdprocessedid="eqgaq"
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
                      fdprocessedid="t04dff"
                    />
                  </div>
                </div>
                <div class="grid-1x2">
                  <div class="input-controls">
                    <label for="name">What service you are interested in</label>
                    <input
                      type="text"
                      class="new-form-control"
                      placeholder="e.g Shopify Design or Webflow or Dashboard Design"
                      id="services"
                      name="services"
                      fdprocessedid="mmhve"
                    />
                  </div>
                  <div class="input-controls">
                    <label for="email">
                      Budget Range (in USD) <span class="required">*</span>
                    </label>
                    <input
                      type="text"
                      required=""
                      class="new-form-control"
                      placeholder="e.g 10k-12k USD"
                      id="budget"
                      name="budget"
                      fdprocessedid="ekywd"
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
                    fdprocessedid="rhy8ng"
                  >
                    <option>Choose an option to connect</option>
                    <option value="zoom">I want to schedule a zoom call</option>
                    <option value="telegram">
                      I want to connect via Telegram
                    </option>
                    <option value="whatsapp">
                      I want to connect via WhatsApp
                    </option>
                    <option value="email">
                      I want to connect via Email Only
                    </option>
                  </select>
                </div>
                <div class="input-controls">
                  <label for="telegram">Please share your Telegram</label>
                  <input
                    type="text"
                    class="new-form-control"
                    placeholder="Your Telegram Handle"
                    id="telegram"
                    name="telegram"
                  />
                </div>
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
                    href="mailto:hello@arshakir.com"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img
                          src="https://www.arshakir.com/images/icon-email.svg"
                          alt=""
                        />
                      </div>
                      <div class="contact-option-details">
                        <p>hello@arshakir.com</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+1 (909)  978 7623"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img
                          src="https://www.arshakir.com/images/icon-phone.svg"
                          alt=""
                        />
                      </div>
                      <div class="contact-option-details">
                        <p>+1 (909) 978 7623</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://t.me/arshakir"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img
                          src="https://www.arshakir.com/images/icon-telegram.svg"
                          alt=""
                        />
                      </div>
                      <div class="contact-option-details">
                        <p>@arshakir</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://join.skype.com/invite/l6FxrNMwMIl5"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img
                          src="https://www.arshakir.com/images/icon-skype.svg"
                          alt=""
                        />
                      </div>
                      <div class="contact-option-details">
                        <p>shahsawar260</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://dribbble.com/arshakir"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img
                          src="https://www.arshakir.com/images/icon-dribbble.svg"
                          alt=""
                        />
                      </div>
                      <div class="contact-option-details">
                        <p>dribbble.com/arshakir</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com/arshakirpk"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img
                          src="https://www.arshakir.com/images/icon-instagram.svg"
                          alt=""
                        />
                      </div>
                      <div class="contact-option-details">
                        <p>instagram.com/arshakirpk</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://behance.net/arshakir"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img
                          src="https://www.arshakir.com/images/icon-behance.svg"
                          alt=""
                        />
                      </div>
                      <div class="contact-option-details">
                        <p>behance.net/arshakir</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtube.com/MrShakir260"
                    target="_blank"
                    class="contact-option"
                  >
                    <div class="contact-option-wrap">
                      <div class="contact-option-icon">
                        <img
                          src="https://www.arshakir.com/images/icon-youtube.svg"
                          alt=""
                        />
                      </div>
                      <div class="contact-option-details">
                        <p>youtube.com/MrShakir260</p>
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

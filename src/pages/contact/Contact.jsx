import React, { useState } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let name, value;

  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = user;

    if (name && email && subject && message) {
      const res = await fetch(
        "https://reactcontactform-eb6f6-default-rtdb.firebaseio.com/reactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Message sent successfully");
      }
    } else {
      alert("plzz fill all the data");
    }
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>touch</span>
      </h2>

      <div className="contact__container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me.I'm always open to discussing new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title"> Mail me </span>
                <h4 className="info__desc"> iesashish03@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title"> Call me </span>
                <h4 className="info__desc">+91 9955737903 </h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100006768642291"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/Ashishk97324610"
              className="contact__social-link"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/ashish-kumar-5a5b40207/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/_musicbuzz_/"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <form className="contact__form" method="POST">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                placeholder="your Name"
                value={user.name}
                onChange={getUserData}
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                name="email"
                placeholder="your Email"
                value={user.email}
                onChange={getUserData}
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={user.subject}
                onChange={getUserData}
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="your Message"
              className="form__control textarea"
              value={user.message}
              onChange={getUserData}
            />
          </div>

          <button className="button" onClick={postData}>
            Send Message
            <span className="button__icon contact__buttn-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

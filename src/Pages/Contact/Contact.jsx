import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../../utils/config";
import contactAnimation from "./animation.json";
import Lottie from "lottie-react";

const Contact = () => {
  const onSubmit = async (values, actions) => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);
      alert("Message sent successfully!");
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  // Validation function
  const validate = (values) => {
    const errors = {};

    if (values.name.length < 3) {
      errors.name = "Name should be greater than 2 characters";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (values.phone.length !== 10 || isNaN(values.phone)) {
      errors.phone = "Phone number must be exactly 10 digits";
    }

    if (values.message.length < 10) {
      errors.message = "Message should be greater than 10 characters";
    }

    return errors;
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate, // Adding validation function
    onSubmit,
    validateOnChange: true,  // Validate on change (immediate validation)
    validateOnBlur: true,    // Validate on blur (when user leaves a field)
    validateOnSubmit: false, // No need to validate on submit, it's already handled
  });

  return (
    <div className="container-fluid py-5 d-flex justify-content-center align-items-center">
      <div
        className="container bg-white shadow rounded-4 p-3 p-md-5 position-relative ball-wrapper"
        style={{ maxWidth: "960px", zIndex: 1 }}
      >
        <div className="row justify-content-center align-items-center">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 50, damping: 15 },
              },
              hidden: { opacity: 0, x: -100 },
            }}
            className="col-md-6 mb-4 mb-md-0 position-relative"
          >
            <h3 className="fw-bold text-center mb-3">Contact Us</h3>
            <p className="text-muted text-center mb-4">
              Feel free to contact us anytime.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  required
                  type="text"
                  id="name"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.name}
                />
                <span>First name</span>
                {touched.name && errors.name && (
                  <div className="error">{errors.name}</div>
                )}
              </div>
              <div className="inputBox">
                <input
                  required
                  type="email"
                  id="email"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.email}
                />
                <span>Email</span>
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>
              <div className="inputBox">
                <input
                  required
                  type="number"
                  id="phone"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.phone}
                />
                <span>Phone</span>
                {touched.phone && errors.phone && (
                  <div className="error">{errors.phone}</div>
                )}
              </div>
              <div className="inputBox">
                <textarea
                  required
                  id="message"
                  rows="3"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.message}
                ></textarea>
                <span>Message</span>
                {touched.message && errors.message && (
                  <div className="error">{errors.message}</div>
                )}
              </div>
              <button
                className="btn w-100 text-white fw-semibold"
                type="submit"
                style={{
                  backgroundColor: "#003a84",
                  padding: "10px 0",
                  fontSize: "15px",
                  borderTopLeftRadius: "100px",
                  borderBottomRightRadius: "100px",
                  borderTopRightRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                SEND
              </button>
            </form>
          </motion.div>

          {/* Animation */}
          <motion.div
            className="col-md-6 d-none d-md-block"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 50, damping: 15 },
              },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            <Lottie
              animationData={contactAnimation}
              loop
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                transform: "translateX(-10%)",
              }}
            />
          </motion.div>
        </div>

        {/* Decorative balls */}
        <div className="ball top-left-ball"></div>
        <div className="ball bottom-right-ball"></div>
      </div>
    </div>
  );
};

export default Contact;

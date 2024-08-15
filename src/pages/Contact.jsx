import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css"; // Ensure this path is correct
import contactImage from "../assets/contact-us-content.gif";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>
      </header>
      <main className="contact-main">
        <motion.div
          className="contact-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
        >
          <img
            src={contactImage}
            alt="Contact"
            style={{
              width: "80%", // Adjust the width percentage as needed
              height: "auto", // Keeps the aspect ratio intact
              maxWidth: "400px", // Optional: sets a maximum width
              borderRadius: "30px", // Optional: adds rounded corners
            }}
          />
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 60 }}
        >
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#32E0C4" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Send Message
          </motion.button>
          {status && <p className="status-message">{status}</p>}
        </motion.form>
      </main>
      <footer className="contact-footer">
        <p style={{ color: "#32E0C4" }}>
          &copy; {new Date().getFullYear()} Cold-Recog. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;

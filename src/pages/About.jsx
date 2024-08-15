import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/About.css"; // Ensure the path is correct
import teamMember1 from "../assets/topper.jpeg"; // Replace with actual image paths
import teamMember2 from "../assets/asss.jpeg";
import teamMember3 from "../assets/ak.jpeg";
import teamMember4 from "../assets/renmain.jpeg";
import teamMember5 from "../assets/gg.jpeg";
import teamMember6 from "../assets/aarthie.jpeg";
const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const teamVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const About = () => {
  const [showTeam, setShowTeam] = useState(false);

  const toggleTeam = () => {
    setShowTeam(!showTeam);
  };

  return (
    <motion.div
      className="about-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header
        className="about-header"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1>About Us</h1>
      </motion.header>

      <motion.section className="about-content">
        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="about-grid-item"
            variants={itemVariants}
            style={{
              backgroundColor: "#2E2E2E",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>Our Mission</h2>
            <p>
              At Cold-Recog, we are dedicated to leveraging technology to assist
              in the identification of unclaimed bodies, providing peace of mind
              to families and aiding authorities in their efforts.
            </p>
          </motion.div>

          <motion.div
            className="about-grid-item"
            variants={itemVariants}
            style={{
              backgroundColor: "#2E2E2E",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>Our Vision</h2>
            <p>
              We envision a world where no family is left in uncertainty, and
              our platform becomes a pivotal tool in resolving unclaimed cases
              efficiently and respectfully.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="about-text" variants={itemVariants}>
          <h2>Our Team</h2>
          <p>
            Our team comprises experts in technology, forensic science, and
            social services, all committed to making a positive impact on
            society through innovation and compassion.
          </p>
        </motion.div>

        <motion.button
          className="team-toggle-button"
          onClick={toggleTeam}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {showTeam ? "Hide Team" : "Meet the Team"}
        </motion.button>

        <AnimatePresence>
          {showTeam && (
            <motion.div
              className="team-section"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={teamVariants}
            >
              <motion.div className="team-member" variants={itemVariants}>
                <img
                  src={teamMember1}
                  alt="Team Member 1"
                  className="team-image"
                />
                <h3>Aakash S</h3>
                <p>Contributor</p>
              </motion.div>

              <motion.div className="team-member" variants={itemVariants}>
                <img
                  src={teamMember2}
                  alt="Team Member 2"
                  className="team-image"
                />
                <h3>B A Aswin</h3>
                <p>Contributor</p>
              </motion.div>

              <motion.div className="team-member" variants={itemVariants}>
                <img
                  src={teamMember3}
                  alt="Team Member 3"
                  className="team-image"
                />
                <h3>B A Aksshay</h3>
                <p>Contributor</p>
              </motion.div>
              <motion.div className="team-member" variants={itemVariants}>
                <img
                  src={teamMember4}
                  alt="Team Member 4"
                  className="team-image"
                />
                <h3>Abhishek Renjan U B</h3>
                <p>Contributor</p>
              </motion.div>
              <motion.div className="team-member" variants={itemVariants}>
                <img
                  src={teamMember5}
                  alt="Team Member 5"
                  className="team-image"
                />
                <h3>Akash A</h3>
                <p>Contributor</p>
              </motion.div>
              <motion.div className="team-member" variants={itemVariants}>
                <img
                  src={teamMember6}
                  alt="Team Member 6"
                  className="team-image"
                />
                <h3>Aarthie E</h3>
                <p>Contributor</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </motion.div>
  );
};

export default About;

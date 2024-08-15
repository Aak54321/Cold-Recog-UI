// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/Features.css";
// import rapidIdentificationImg from "../assets/rapid-identification.jpg";
// import ideImg from "../assets/ide.png";
// import secureImg from "../assets/secure.jpg";
// import reportImg from "../assets/report.jpg";
//
// const featureVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };
//
// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } },
// };
//
// const Features = () => {
//   return (
//     <div className="features-page">
//       <motion.header
//         className="features-header"
//         initial={{ y: -250 }}
//         animate={{ y: 0 }}
//         transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
//       >
//         <h1>Features</h1>
//       </motion.header>
//
//       <motion.main
//         className="features-main"
//         initial="hidden"
//         animate="visible"
//         variants={featureVariants}
//       >
//         <motion.div className="feature-section">
//           <motion.img
//             src="../assets/rapid-identification.jpg"
//             alt="Rapid Identification"
//             className="feature-image"
//             variants={imageVariants}
//           />
//           <div className="feature-text">
//             <h2>Rapid Identification</h2>
//             <p>
//               Our system ensures swift identification of unclaimed bodies with
//               high accuracy. Leveraging advanced algorithms and a user-friendly
//               interface, we provide prompt and reliable results.
//             </p>
//           </div>
//         </motion.div>
//
//         <motion.div className="feature-section" variants={featureVariants}>
//           <motion.img
//             src="../assets/ide.png"
//             alt="User-Friendly Interface"
//             className="feature-image"
//             variants={imageVariants}
//           />
//           <div className="feature-text">
//             <h2>User-Friendly Interface</h2>
//             <p>
//               Designed with ease of use in mind, our web app features an
//               intuitive interface that simplifies the process of identifying and
//               managing information. Access our technology effortlessly and
//               efficiently.
//             </p>
//           </div>
//         </motion.div>
//
//         <motion.div className="feature-section" variants={featureVariants}>
//           <motion.img
//             src="../assets/secure.jpg"
//             alt="Secure and Private"
//             className="feature-image"
//             variants={imageVariants}
//           />
//           <div className="feature-text">
//             <h2>Secure and Private</h2>
//             <p>
//               We prioritize the security and privacy of our users' data. Our
//               system is equipped with robust security measures to protect
//               sensitive information and ensure that your data remains
//               confidential.
//             </p>
//           </div>
//         </motion.div>
//
//         <motion.div className="feature-section" variants={featureVariants}>
//           <motion.img
//             src="../assets/report.jpg"
//             alt="Comprehensive Reporting"
//             className="feature-image"
//             variants={imageVariants}
//           />
//           <div className="feature-text">
//             <h2>Comprehensive Reporting</h2>
//             <p>
//               Our platform offers detailed reports and analytics to help you
//               make informed decisions. Access comprehensive data and insights to
//               better understand and manage the identification process.
//             </p>
//           </div>
//         </motion.div>
//       </motion.main>
//
//       <footer className="features-footer">
//         <p style={{ color: "#32E0C4" }}>
//           &copy; {new Date().getFullYear()} Cold-Recog. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };
//
// export default Features;
//
import React from "react";
import { motion } from "framer-motion";
import "../styles/Features.css";
import rapidIdentificationImg from "../assets/rapid-identification.jpg";
import ideImg from "../assets/ide.png";
import secureImg from "../assets/secure.jpg";
import reportImg from "../assets/report.jpg";

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } },
};

const Features = () => {
  return (
    <div className="features-page">
      <motion.header
        className="features-header"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1>Features</h1>
      </motion.header>

      <motion.main
        className="features-main"
        initial="hidden"
        animate="visible"
        variants={featureVariants}
      >
        <motion.div className="feature-section">
          <motion.img
            src={rapidIdentificationImg} // Updated the image path
            alt="Rapid Identification"
            className="feature-image"
            variants={imageVariants}
          />
          <div className="feature-text">
            <h2>Rapid Identification</h2>
            <p>
              Our system ensures swift identification of unclaimed bodies with
              high accuracy. Leveraging advanced algorithms and a user-friendly
              interface, we provide prompt and reliable results.
            </p>
          </div>
        </motion.div>

        <motion.div className="feature-section" variants={featureVariants}>
          <motion.img
            src={ideImg} // Updated the image path
            alt="User-Friendly Interface"
            className="feature-image"
            variants={imageVariants}
          />
          <div className="feature-text">
            <h2>User-Friendly Interface</h2>
            <p>
              Designed with ease of use in mind, our web app features an
              intuitive interface that simplifies the process of identifying and
              managing information. Access our technology effortlessly and
              efficiently.
            </p>
          </div>
        </motion.div>

        <motion.div className="feature-section" variants={featureVariants}>
          <motion.img
            src={secureImg} // Updated the image path
            alt="Secure and Private"
            className="feature-image"
            variants={imageVariants}
          />
          <div className="feature-text">
            <h2>Secure and Private</h2>
            <p>
              We prioritize the security and privacy of our users' data. Our
              system is equipped with robust security measures to protect
              sensitive information and ensure that your data remains
              confidential.
            </p>
          </div>
        </motion.div>

        <motion.div className="feature-section" variants={featureVariants}>
          <motion.img
            src={reportImg} // Updated the image path
            alt="Comprehensive Reporting"
            className="feature-image"
            variants={imageVariants}
          />
          <div className="feature-text">
            <h2>Comprehensive Reporting</h2>
            <p>
              Our platform offers detailed reports and analytics to help you
              make informed decisions. Access comprehensive data and insights to
              better understand and manage the identification process.
            </p>
          </div>
        </motion.div>
      </motion.main>

      <footer className="features-footer">
        <p style={{ color: "#32E0C4" }}>
          &copy; {new Date().getFullYear()} Cold-Recog. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Features;

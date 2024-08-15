import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import logo from "../assets/logo.png";
import detectiveImage from "../assets/detective.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={logo} alt="Logo" className="headerLogo" />
        <div className="navLinks">
          <Link to="/About">
            <button>About</button>
          </Link>
          <Link to="/Features">
            <button>Features</button>
          </Link>
          <Link to="/Contact">
            <button>Contact us</button>
          </Link>
        </div>
      </header>
      <main className="landing-main">
        <div className="text-container">
          <h1>COLD RECOG</h1>
          <h2>
            Our innovative system provides rapid, accurate identification of
            unclaimed bodies, ensuring respect and closure for families. Access
            this breakthrough technology easily through our user-friendly web
            app.
          </h2>

          <Link to="/search">
            <button>SEARCH</button>
          </Link>
        </div>
        <div className="image-container">
          <img
            src={detectiveImage}
            alt="Detective"
            className="detective-image"
          />
        </div>
      </main>
      <footer>
        <nav>
          <a href="https://github.com/Hackathon-5XA/Cold-Recog-UI/issues">
            <button>Issues</button>
          </a>
          <a href="https://github.com/Hackathon-5XA">
            <button>Repo</button>
          </a>
          <a href="/">
            <button>Privacy Policy</button>
          </a>
        </nav>
        <h1>CopyRight &copy; 5XA</h1>
      </footer>
    </div>
  );
};

export default LandingPage;

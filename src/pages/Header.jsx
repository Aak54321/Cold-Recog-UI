import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Header.css";
import logo from "../assets/logo.png";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderMobileMenu = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          backgroundColor: "#212121",
          color: "white",
          width: "50%",
        },
      }}
    >
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <ul className="menu_content">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </Drawer>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
      <Toolbar>
        <img src={logo} alt="Logo" className="headerLogo" />
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="menuButton"
              disableRipple
            >
              <MenuIcon />
            </IconButton>
            {renderMobileMenu}
          </>
        ) : (
          <div className="navLinks">
            <Link to="/about">
              <button>About</button>
            </Link>
            <Link to="/features">
              <button>Features</button>
            </Link>
            <Link to="/contact">
              <button>Contact us</button>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

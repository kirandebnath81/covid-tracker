import React, { useEffect, useRef, useState } from "react";

import logo from "../img/logo4.png";

import "./style/Main.css";

//mui
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let activeStyle = {
    backgroundColor: "rgba(0,0,0,0.8",
    borderRadius: "12px",
    color: "white",
    transition: "350ms ease-in-out",
  };

  const menuRef = useRef();

  useEffect(() => {
    const clickHandler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", clickHandler);

    return () => {
      window.removeEventListener("mousedown", clickHandler);
    };
  }, []);

  const clickHandler = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <NavLink to="/">
            <img src={logo} alt="" onClick={clickHandler} />
          </NavLink>

          <div
            className={`navbar__items ${isOpen && "open--menu"} `}
            ref={menuRef}
          >
            <NavLink
              to="/covid-19/graph"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div className="navbar__item" onClick={clickHandler}>
                Graph View
              </div>
            </NavLink>
            <NavLink
              to="/covid-19/table"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div className="navbar__item" onClick={clickHandler}>
                Table View
              </div>
            </NavLink>
            <NavLink
              to="/covid-19/india/states"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <div className="navbar__item" onClick={clickHandler}>
                India
              </div>
            </NavLink>
          </div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className="navbar__menu "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <ClearIcon sx={{ color: "white" }} /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

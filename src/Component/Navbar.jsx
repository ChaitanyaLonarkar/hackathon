import React from "react";
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="outer">
          <div className="logo">
            <img src={logo} alt="" />
           <span>Blog</span> World
          </div>
          <div className="links">
            <ul>
              <li>Home</li>
              <li>Blogs</li>
              <li>Search</li>
              <li>Profile</li>
            </ul>
          </div>
          <div className="git">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
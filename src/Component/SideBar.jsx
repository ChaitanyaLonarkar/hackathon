import React from 'react'
import { MdEmojiEvents } from "react-icons/md";
export default function SideBar() {
  return (
    <>
    
    <div className="sidebar">
      <header>Sort By</header>
      <a href="#" className="active">
        <i className="fas fa-qrcode"></i>
        <span>Latest</span>
      </a>
      <a href="#">
        <i className="fas fa-link"></i>
        <span>Hot</span>
      </a>
      <a href="#">
        <i className="fas fa-stream"></i>
        <span>Best</span>
      </a>
      <a href="#">
         <i classNameName="fas fa-calendar"></i>
        <span>Events</span>
      </a>
      <a href="#">
        <i className="far fa-question-circle"></i>
        <span>About</span>
      </a>
      <a href="#">
        <i className="fas fa-sliders-h"></i>
        <span>Services</span>
      </a>
      <a href="#">
        <i className="far fa-envelope"></i>
        <span>Contact</span>
      </a>
    </div>
    </>
  )
}

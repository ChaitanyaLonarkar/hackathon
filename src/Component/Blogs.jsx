import React from "react";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import profile from "../assets/han.png";
import b1 from "../assets/ro.jpg";
import { FaShareFromSquare } from "react-icons/fa6";

import { useState } from "react";

export default function Blogs() {
  const [input, setinput] = useState("");
  
  return (
    <>
      <div className="all">
        <div className="outer-blog">
          <div className="blog">
            {/* <div className="color"> */}
            <div className="profile">
              <img src={profile} alt="" />
              <h3>Chaitanya Lonarkar</h3>
              <p>Date : 24/02/24</p>
            </div>
            <div className="content">
              <img src={b1} alt="" />
              <div className="title">
                <h2>Bastman name is 'HITMAN'</h2>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                aliquam praesentium debitis provident consectetur omnis
                accusantium laboriosam officia animi consequatur. Culpa a ullam
                atque quisquam!
              </div>
              <div className="coment">
                <div className="btn">
                  <SlLike />
                  <button>Like</button>
                </div>
                <div className="btn">
                  <FaRegComment />
                  <button>Comment</button>
                </div>
                <div className="btn">
                  <FaShareFromSquare />
                  <button>Share</button>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="outer-blog">
          <div className="blog">
            {/* <div className="color"> */}
            <div className="profile">
              <img src={profile} alt="" />
              <h3>Chaitanya Lonarkar</h3>
              <p>Date : 24/02/24</p>
            </div>
            <div className="content">
              <img src={b1} alt="" />
              <div className="title">
                <h2>Bastman name is 'HITMAN'</h2>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                aliquam praesentium debitis provident consectetur omnis
                accusantium laboriosam officia animi consequatur. Culpa a ullam
                atque quisquam!
              </div>
              <div className="coment">
                <div className="btn">
                  <SlLike />
                  <button>Like</button>
                </div>
                <div className="btn">
                  <FaRegComment />
                  <button>Comment</button>
                </div>
                <div className="btn">
                  <FaShareFromSquare />
                  <button>Share</button>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="outer-blog">
          <div className="blog">
            {/* <div className="color"> */}
            <div className="profile">
              <img src={profile} alt="" />
              <h3>Chaitanya Lonarkar</h3>
              <p>Date : 24/02/24</p>
            </div>
            <div className="content">
              <img src={b1} alt="" />
              <div className="title">
                <h2>Bastman name is 'HITMAN'</h2>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                aliquam praesentium debitis provident consectetur omnis
                accusantium laboriosam officia animi consequatur. Culpa a ullam
                atque quisquam!
              </div>
              <div className="coment">
                <div className="btn">
                  <SlLike />
                  <p>Like</p>
                </div>
                <div className="btn">
                  <FaRegComment />
                  <p>Comment</p>
                </div>
                <div className="btn">
                  <FaShareFromSquare />
                  <p>Share</p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

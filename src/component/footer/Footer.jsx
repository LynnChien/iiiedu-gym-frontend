import React from "react";
import "./Footer.scss";
import { FaFacebookSquare } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiFillPlaySquare } from 'react-icons/ai';

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="copyright">
          Copyright 2020 WoW GYM Inc.
        </div>
        <div className="address">
          TEL:02-6666-6631 地址:台北市大安區復興南路一段441號
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/"><FaFacebookSquare /></a>
          <a href="https://www.instagram.com/"><FiInstagram /></a>
          <a href="https://www.youtube.com/"><AiFillPlaySquare /></a>
        </div>
      </div>
    </>
  );
}
export default Footer;
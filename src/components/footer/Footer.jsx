import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p><strong>Saturn</strong> - By GHC</p>
        <div className='social'>
          <BsFacebook className='icon' />
          <RiInstagramFill className='icon' />
          <AiFillTwitterCircle className='icon' />
          <AiFillLinkedin className='icon' />
        </div>
      </div>
    </footer>
  );
};

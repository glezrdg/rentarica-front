import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex items-center text-white text-2xl lg:text-3xl 2xl:text-8xl  my-5">
      <a href="https://www.instagram.com/rentarica.rd/">
        <FaInstagram className="social-media-icon" />
      </a>
      <a href="https://www.facebook.com/people/RentaricaRD/100085999827227/">
        <FaFacebook className="social-media-icon" />
      </a>
      <a href="https://x.com/rentarica">
        <FaXTwitter className="social-media-icon" />
      </a>
      <a href="https://www.tiktok.com/@rentarica.rd">
        <FaTiktok className="social-media-icon" />
      </a>
      <a href="https://www.linkedin.com/company/rentarica/">
        <FaLinkedin className="social-media-icon" />
      </a>
      <a href="https://www.youtube.com/@rentaricard">
        <FaYoutube className="social-media-icon" />
      </a>
    </div>
  );
};

export default SocialMedia;

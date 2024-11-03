import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex items-center text-white text-2xl my-5">
      <FaInstagram className="social-media-icon" />
      <FaFacebook className="social-media-icon" />
      <FaXTwitter className="social-media-icon" />
      <FaTiktok className="social-media-icon" />
      <FaLinkedin className="social-media-icon" />
      <FaYoutube className="social-media-icon" />
    </div>
  );
};

export default SocialMedia;

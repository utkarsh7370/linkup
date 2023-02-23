import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Socials.css";
function SocialLinks() {
  return (
    <div className="social-links">
      <div>
        <a href="https://www.facebook.com/" class="social-button">
          <FaFacebook />
        </a>
      </div>

      <div>
        <a href="https://www.twitter.com/" class="social-button">
          <FaTwitter />
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/" class="social-button">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;

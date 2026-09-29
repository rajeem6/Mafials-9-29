import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <h3>Keep exploring. There's always more to discover.</h3>
          <div className="footer__links-1">
            <a className="footer__link" href="">
              <FontAwesomeIcon className="foot-linkedIn" icon={faLinkedin} />
            </a>
            <a className="footer__link" href="">
              <FontAwesomeIcon className="foot-Github" icon={faGithub} />
            </a>
            <a className="footer__link" href="">
              <FontAwesomeIcon className="foot-pdf" icon={faFilePdf} />
            </a>
          </div>
          <ul>
            <li>Learn more About Us</li>
            <li>Help Centre</li>
            <li>Cookie Preferences</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
            <li>Privacy</li>
            <li>Website Information</li>
            <li>Legal Notices</li>
          </ul>
          <span>© 2020 - 2026 Mafials, Inc.</span>
          <br />
          <h6>Designed by Rajeem</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

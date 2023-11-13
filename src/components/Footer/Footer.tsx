import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Me</h3>
            <p>Email: csciroy@gmail.com</p>
          </div>
          <div className="col-md-6">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="https://github.com/SubZeRoy9">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

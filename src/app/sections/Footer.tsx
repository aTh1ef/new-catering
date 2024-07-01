import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#hero">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#about">About</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#menu">Menu</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#events">Events</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#gallery">Gallery</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-info text-center">
                  <h3>Tellis Caterers</h3>
                  <p>
                    Kapikkad 2nd Cross, Thokkotu <br />
                    Mangalore, Pin-Code: 575022<br />
                    <br />
                    <strong>Phone:</strong> 8494804283 / 9448517186<br />
                    <strong>Email:</strong> telliscatererrs@gmail.com<br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="https://www.instagram.com/tellis_caterers?igsh=d2EwZ2lhcGl4bmIw" className="instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61561635720084" className="facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Functions</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Wedding Events</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Birthday Parties</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Private Events</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Custom Events</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="copyright">
            &copy; Copyright <strong><span>Tellis Caterers</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">WebTech</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

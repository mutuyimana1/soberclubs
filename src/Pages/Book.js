import React from 'react';
import Navbar from '../Component/Navbar';

function Book() {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="" style={{ width: '70%' }} />
        </div>
      </div>

      <header className="header_section">
        <Navbar />
      </header>

      <section className="about" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/img/1.jpeg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3 style={{ color: 'white', fontStyle: 'italic' }}>About the book “The Power of Keeping Sober”</h3>
              <p style={{ color: 'white', fontStyle: 'italic' }}>
                This book represents a deeply personal endeavor for Dr. Gamariel Mbonimana, the Managing
                Director of Sober Club and the author of the book "The Power of Keeping Sober."
              </p>
              <ul>
                <li style={{ color: 'white', fontStyle: 'italic' }}><i className="bi bi-check2-circle"></i> Struggling with alcoholism in the past, the journey led to my resignation from the Rwandan Parliament on November 13th, 2022.</li>
                <li style={{ color: 'white', fontStyle: 'italic' }}><i className="bi bi-check2-circle"></i> This decision followed concerns raised by President Paul Kagame about a fellow parliamentarian who, enjoying parliamentary immunity, had repeatedly been involved in drunk driving incidents without facing legal consequences.</li>
                <li style={{ color: 'white', fontStyle: 'italic' }}><i className="bi bi-check2-circle"></i> President Kagame emphasized the principle that those in power should not misuse it to endanger lives. This event prompted Dr. Gamariel Mbonimana's reflection on alcohol abuse, leading to the cessation of drinking entirely and dedication to the cause.</li>
              </ul>
              <p style={{ color: 'white', fontStyle: 'italic' }}>
                The Guest of Honour at the official book launch on November 12th, 2023, was Prof. Kabera
                Callixte, the Vice Chancellor of East African University Rwanda. In the accompanying photo,
                Dr. Gamariel Mbonimana is seen with panelists, including Prof. Antoine Nyagahene, a
                prominent Rwandan historian, archeologist, paleontologist, and book writer, who wrote the
                foreword after reading the book.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Other health activities</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Cultural education</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Other social education without accommodation</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Arts and entertainment activities</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Creative</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Kagarama <br />
                  Kigali, Kicukiro<br />
                  Rwanda <br /><br />
                  <strong>Phone:</strong> +250788872060<br />
                  <strong>Email:</strong> soberclubrw@gmail.com<br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>About Sober Clubs Rwanda</h3>
                <p>Sober Clubs Rwanda, an organized social enterprise company operating under the legal and regulatory framework of Rwanda, is committed to addressing the critical issue of substance abuse within our community.</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; 2023 <strong><span>Sober Clubs Rwanda</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Book;

import React from 'react';
import Navbar from '../Component/Navbar';

function About() {
  return (
    <div class="sub_page">

      <div class="hero_area">

        <div class="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="" style={{ width: '50%' }} />
        </div>
        </div>


        <header className="header_section">
        <Navbar />
      </header>
      </div>




      <section class="about_section layout_padding">
      <div class="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              So you want to get the buzz without the booze?
              Then The Sober Club is for you.
            </p>
          </div>
        <div class="container  ">
         
          <div class="row">
            <div class="col-md-6 ">
              <div class="img-box">
                <img src="images/slider-img3.jpeg" alt="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="detail-box">
                <h3>
                  At Sober Club
                </h3>
                <p>
                  Our mission is to champion sobriety and support individuals in their journey towards a healthier, alcohol-free life. We are committed to preventing alcohol abuse through education, community support, and personalized resources
                </p>
                <p>
                  Our founder and Managing Director, Dr. Gamariel Mbonimana, has a deeply personal connection to this cause. His book, "The Power of Keeping Sober," reflects his personal journey and professional insights into the challenges and rewards of maintaining sobriety. Dr. Mbonimana’s work serves as a beacon of hope and guidance for those navigating the path to recovery.
                </p>
                <a href="/book">
                  Read More
                </a>
              </div>
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
                  <li><i className="bx bx-chevron-right"></i> <a href="#"> arts and entertainment activities</a></li>
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

  )
}

export default About
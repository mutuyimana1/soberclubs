import React from 'react'

function ContactUs() {
  return (
      <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="" style={{ width: '70%' }} />
        </div>
      </div>

      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.jpg" alt="" width={100} />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/awards">Awards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/bios">Bios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contactus">Contact Us</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> Program</a>
                </li> */}
                <form className="form-inline">
                  <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section class="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
      <div class="container">

        <div class="row">

          <div class="col-lg-6">

            <div class="row">
              <div class="col-md-12">
                <div class="info-box">
                  <i class="bx bx-map"></i>
                  <h3 style={{ color: 'white', fontStyle: 'italic' }}>Our Address</h3>
                  <p style={{ color: 'white', fontStyle: 'italic' }}>Kigali city, Kicukiro, Kagarama</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bx bx-envelope"></i>
                  <h3 style={{ color: 'white', fontStyle: 'italic' }}>Email Us</h3>
                  <h3  style={{ color: 'white', fontStyle: 'italic' }}><strong ></strong> soberclubrw@gmail.com<br/></h3>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bx bx-phone-call"></i>
                  <h3 style={{ color: 'white', fontStyle: 'italic' }}>Call Us</h3>
                  <p style={{ color: 'white', fontStyle: 'italic' }}>+250788872060</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">
            <form action="contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><input type="submit" value="Send Message"/></div>
            </form>
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
                  <strong>Phone:</strong> +250 789 567 567<br />
                  <strong>Email:</strong> info@soberclubsrwanda.com<br />
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

export default ContactUs
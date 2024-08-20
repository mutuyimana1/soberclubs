import React from 'react';
import './Awards.css'; // Import your CSS file

function Awards() {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt="" className="hero-bg-img" />
          </div>
        </div>

        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.jpg" alt="" width={100} />
              </a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/about">About <span className="sr-only">(current)</span></a>
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
      </div>

      <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div className="container">
          <div className="row">
            {[
              { src: 'assets/img/4.jpeg', title: 'Sober Club Managing Director', name: 'Dr. MBONIMANA Gamariel, PhD', description: 'Baptized the Founder of Sober Club Dr. Gamariel Mbonimana and who resigned in Parliament because of alcohol' },
              { src: 'assets/img/7.jpg', title: 'Goodrich Business Group', name: 'Accountant', description: 'Thank you so much Amb Dr. Francis for having organized such an important event and for the medal and certificate bestowed to me. Together we can do more and reach far!' },
              { src: 'assets/img/6.jpeg', title: 'Sober Club financed and presented the best animation awards', name: 'Product Manager', description: 'Sober Club financed and presented the best animation awards, one of the awards given by Rwanda International Students Film Festival.' },
              { src: 'assets/img/5.jpeg', title: 'William Anderson', name: 'CTO', description: 'Dr. Gamariel was awarded a medal and certificate of appreciation due to Sober Club success stories.' },
              { src: 'assets/img/17.jpeg', title: 'William Anderson', name: 'CTO', description: 'On 10/01/2024 at University Rwanda, @urcst Managing Director of @SoberClub1 "@DrMbonimana" former MP who resigned because of driving under alcohol influence has officially launched "Academic Sober Prize Competition" in all Universities and HLI in #Rwanda.' },
              { src: 'assets/img/18.jpeg', title: 'William Anderson', name: 'CTO', description: 'Grateful to the amazing speakers @AndyBumuntu @DrMbonimana @uzabeni @IgnaceGatare who graced "A Dialogue on Responsible Consumption" @urcst with their presence! Your wisdom and inspiring words on the power of keeping sober have left a lasting impact on us. #SDGs #TunyweLess' }
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={index}>
                <div className="member">
                  <div className="member-img">
                    <img src={item.src} className="img-fluid" alt={item.title} />
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter"></i></a>
                      <a href="#"><i className="bi bi-facebook"></i></a>
                      <a href="#"><i className="bi bi-instagram"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{item.title}</h4>
                    <span>{item.name}</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
                  <li><i className="bx bx-chevron-right"></i> <a href="#">arts and entertainment activities</a></li>
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
  );
}

export default Awards;

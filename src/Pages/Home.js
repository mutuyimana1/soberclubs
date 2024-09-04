import React, { useEffect } from 'react';
import Navbar from '../Component/Navbar';

function Home() {

  useEffect(() => {
    // Create a script element
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = 'https://embed.tawk.to/66c5d9a2ea492f34bc0883c0/1i5qdk9ca';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append the script to the body
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="" style={{ width: '50%' }} />
        </div>
      </div>

      <header className="header_section">
        <Navbar />  
      </header>

      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Welcome to  <br />
                        Sober Club
                      </h1>
                      <p>
                        Sober Club, a dedicated social enterprise deeply committed to community well-being to address critical issue of substance abuse within our community, utilizing 'The Power of Keeping Sober' as a cornerstone resource.
                      </p>
                      <div className="btn-box">
                        <a href="/about" className="btn1">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.webp" alt=""  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Imbaraga  <br />
                        z'Ubushobozi
                      </h1>
                      <p>
                        The book, available in Kinyarwanda under the title “Imbaraga z’Ubushishozi,” and very soon in English under the title “ The Power of Keeping Sober” is a key component in our strategy to combat alcohol and drug-related challenges.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img1.jpeg" alt=""  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Isn't just a  <br />
                        social company
                      </h1>
                      <p>
                        The Sober Club isn't just a social company; it's a movement towards redemption, moderation, and a healthier way of living. Through shared experiences, professional guidance, and a collective commitment, this club stands as a beacon of hope for those seeking a life beyond the influence of alcohol. Join the Sober Club and become a part of a community that celebrates transformation, resilience, and the power of choosing a sober, fulfilling life.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img2.jpg" alt=""  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                      SOBER CLUB,   <br />
                      a community benefit company
                      </h1>
                      <p>
                      SOBER CLUB, a community benefit company, located in Kicukiro District (Kigali-Rwanda), with primary social objectives whose surpluses are re-invested, for that purpose, in the business or in the community rather than being driven by the need to maximize profit for its shareholders or owners (LAW N° 019/2023 OF 30/03/2023 AMENDING LAW N° 007/2021 OF 05/02/2021 GOVERNING COMPANIES IN RWANDA, Article 1:33)
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img3.jpeg" alt=""  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
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
                  <strong>Email:</strong>  soberclubrw@gmail.com<br />
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

export default Home;

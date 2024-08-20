import React from 'react'

function Services() {
  return (
    <div className="hero_area">

      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="" style={{ width: '50%' }} />
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

      <section class="services">
      <div class="container">
        <div class="row">
          
          <div class="col-md-6 mb-4">
            <h6 class="card-title" style={{ color: 'white', fontStyle: 'italic' }}>
              <a href="#">ENTREPRENEURSHIP OPPORTUNITIES FOR INTERNATIONAL STUDENTS</a>
            </h6>
            <i>
              <h6 style={{ color: 'white', fontStyle: 'italic' }}>
                <a href="#">Summer School Program</a>
              </h6>
            </i>
            <div class="pt-4">
              <ul>
                <li style={{ color: 'white', fontStyle: 'italic' }}>Mixes international students with local students from local Universities</li>
                <li style={{ color: 'white', fontStyle: 'italic' }}>Focuses on cultural and educational exchange.</li>
                <i>
                  <h6>
                    <a href="#" style={{ color: 'white', fontStyle: 'italic' }}>Educational Visits and Activities</a>
                  </h6>
                </i>
                <li style={{ color: 'white', fontStyle: 'italic' }}>Visits to relevant learning institutions (factories, industrial zones, service providers).</li>
                <li style={{ color: 'white', fontStyle: 'italic' }}>Includes games and fun stories to enhance learning.</li>
                <i>
                  <h6>
                    <a href="#" style={{ color: 'white', fontStyle: 'italic' }}>International Internship Programs</a>
                  </h6>
                </i>
                <li style={{ color: 'white', fontStyle: 'italic' }}>Hands-on experience in various industries.</li>
                <li style={{ color: 'white', fontStyle: 'italic' }}>Enhances employability and professional growth.</li>
                <i>
                  <h6 style={{ color: 'white', fontStyle: 'italic' }}>
                    <a href="#">Sober Trips</a>
                  </h6>
                </i>
                <li style={{ color: 'white', fontStyle: 'italic' }}>Exclusive travel experiences for Sober Club members</li>
                <li style={{ color: 'white', fontStyle: 'italic' }}>Explore tourist areas in Rwanda and beyond (lakes, forests, parks, volcanoes).</li>
              </ul>
            </div>
          </div>
    
          
          <div class="col-md-6 mb-4">
            <div class="d-flex flex-column align-items-center">
              <div class="mb-3">
                <img src="assets/img/Picture1.jpg" class="img-fluid" alt="Image 1"/>
               
              </div>
              <div class="mb-3">
                <img src="assets/img/Picture2.jpg" class="img-fluid" alt="Image 2"/>
               
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="service-details">

<div class="container">
  <h5 class="card-title"><a href="#">Our Vision</a></h5>
  <p class="description">Sober Club envisions a healthier life, more conscious, and vibrant future for all people
    , and we
    invite you to be part of this transformative journey.</p>
  <div class="row">
    <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
      <div class="card">
        <div class="card-img">
          <img src="assets/img/11.jpg" alt="..."/>
        </div>
        <div class="card-body">
          <h5 class="card-title"><a href="#">Education Initiatives</a></h5>
          <p class="card-text">Develop and implement projects aligned with the Department of Students,
            promoting a distinctive culture of community development through innovative
            educational programs.</p>
          <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
      </div>
    </div>
    <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
      <div class="card">
        <div class="card-img">
          <img src="assets/img/13.png" alt="..."/>
        </div>
        <div class="card-body">
          <h5 class="card-title"><a href="#">Leveraging ICT for Empowerment</a></h5>
          <p class="card-text">Initiate and leverage Information and Communication Technology (ICT) to
            empower individuals, fostering a unique sense of community well-being through
            innovative digital initiatives.</p>
          <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
      </div>

    </div>
    <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
      <div class="card">
        <div class="card-img">
          <img src="assets/img/14.png" alt="..."/>
        </div>

        <div class="card-body">
          <h5 class="card-title"><a href="#">Promoting Sustainable Agriculture Practices</a></h5>
          <p class="card-text">Undertake projects that promote sustainable agricultural practices, contributing to
            both environmental consciousness and community development in a distinctive
            way.</p>
          <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
      </div>
    </div>
    <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
      <div class="card">
        <div class="card-img">
          <img src="assets/img/service-details-4.jpg" alt="..."/>
        </div>
        <div class="card-body">
          <h5 class="card-title"><a href="#">Financial Literacy and Responsible Banking Initiatives</a></h5>
          <p class="card-text">Implement initiatives related to financial literacy and responsible banking,
            cultivating a unique atmosphere of financial responsibility within the community.</p>
          <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
      </div>
    </div>
    <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
      <div class="card">
        <div class="card-img">
          <img src="assets/img/15.jpg" alt="..."/>
        </div>
        <div class="card-body">
          <h5 class="card-title"><a href="#">Addressing Substance Abuse and Rehabilitation</a></h5>
          <p class="card-text">IDevelop and execute projects aimed at addressing substance abuse and supporting
            rehabilitation efforts, emphasizing a unique and comprehensive approach to
            recovery.</p>
          <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
      </div>
    </div>
    <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
      <div class="card">
        <div class="card-img">
          <img src="assets/img/16.png" alt="..."/>
        </div>
        <div class="card-body">
          <h5 class="card-title"><a href="#">Health and Well-being Initiatives</a></h5>
          <p class="card-text">Launch initiatives that promote overall health and well-being, offering a
            distinctive perspective on community health programs.</p>
          <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
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

export default Services
import React from 'react';

function Bios() {
  return (
    <div className="hero_area">

      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="" style={{ width: '0%' }} />
        </div>
      </div>

      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
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
                  <a className="nav-link" href="/about">About</a>
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
                  <a className="nav-link" href="#"><i className="fa fa-user" aria-hidden="true"></i> Program</a>
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

      <section className="service-details">
        <div className="container">
          <h5 className="card-title">
            <a href="#"><h2 style={{ color: 'white', fontStyle: 'italic' }}><i>Photos and Bios of Some Members</i></h2></a>
          </h5>
          <div className="row">
            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/26.jpeg" alt="..." style={{ width: '500px', height: '500px' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title"><a href="#">Hon. Amb. Naeem Khan (CSP, FSP)</a></h5>
                  <p className="card-text">Hon. Naeem Khan is the current High Commissioner and Ambassador to Rwanda. With an illustrious career in diplomacy, he has held several prominent positions, including Director General Consular Affairs, Overseas Pakistanis, and Crisis Management at MOFA, and Consul General in Afghanistan.
                    He has served as Counsellor and Head of Chancery at the High Commission of Pakistan in Ottawa, Canada, and has held key roles in Havana, Cuba, Buenos Aires, Argentina, and Madrid, Spain. His extensive experience includes acting as Deputy Chief of Protocol and Director for Canada and Latin America at the Ministry of Foreign Affairs in Islamabad, Pakistan.
                    Hon.
                  </p>
                  <div className="read-more"><a href=""><i className="bi bi-arrow-right"></i> Read More</a></div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/20.jpeg" alt="..." style={{ width: '500px', height: '500px' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title"><a href="#">Fortune Daniel Molokele</a></h5>
                  <p className="card-text">Fortune Daniel Molokele is a human rights lawyer who is based at Whange in Zimbabwe 🇿🇼
                    He is the founder and managing partner of the Molokele Law Chambers that is located at Whange
                    Prior to that, he also practiced with Mavhunga and Associates and also with Ben Baron and Partners
                    He graduated with an LLB Honours degree from the University of Zimbabwe in 1999.
                    During 2008, he also obtained an LLM degree specializing on Fundamental Rights Litigation from the University of South Africa
                    Then in 2020 he graduated with a Masters of Business Administration (MBA) degree with the African Leadership University in Kigali, Rwanda
                    Over the years.
                  </p>
                  <div className="read-more"><a href=""><i className="bi bi-arrow-right"></i> Read More</a></div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/19.png" alt="..." style={{ width: '500px', height: '600px' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title"><a href="#">Desmond Michael Coverley, Ph.D</a></h5>
                  <p className="card-text">Dr. Desmond Michael Coverley was born in Grand Turk, Turks and Caicos Islands, and is a citizen of the United States.
                    Dr. Coverley’s educational pursuits include a high school diploma from H. J. Robinson High School, Grand Turk; a degree in Religious and Christian Education from Blue Water Bible College.
                  </p>
                  <div className="read-more"><a href=""><i className="bi bi-arrow-right"></i> Read More</a></div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/24.jpeg" alt="..." style={{ width: '500px', height: '600px' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title"><a href="#">Mrs. Juliana Obiageli Saka</a></h5>
                  <p className="card-text">Mrs. Juliana Obiageli Saka is an accomplished professional with a Masters in Transport Planning from Lagos State University. Her expertise extends to Maritime and Port Security, with certificates from the Galilee International Management Institute in Israel and the Arab Academy for Science, Technology & Maritime Transport in Egypt. She has undergone specialized training in Port Operations in Belgium and Port Regulations, Compliance, and Performance in South Africa.
                  </p>
                  <div className="read-more"><a href=""><i className="bi bi-arrow-right"></i> Read More</a></div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/b.jpg" alt="..." style={{ width: '500px', height: '600px' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title"><a href="#">Hon.Tapera Saiz</a></h5>
                  <p className="card-text">Hon.Tapera Saiz is a South Sudanese national and serves as the Executive Director of the African Union's Peace and Security Council in Addis Ababa, Ethiopia.
                    She graduated with a Bachelor's degree in International Relations from the University of Nairobi in Kenya.
                    Prior to joining the African Union, she was the Director of the Southern Sudan Peace Process and held various positions within the United Nations in Sudan.
                    Hon.Tapera Saiz's experience also includes working with various non-governmental organizations and contributing to peace-building efforts in the region.
                  </p>
                  <div className="read-more"><a href="tapera.html"><i className="bi bi-arrow-right"></i> Read More</a></div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <div className="card">
                <div className="card-img">
                  <img src="assets/img/56.jpg" alt="..." style={{ width: '500px', height: '600px' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title"><a href="#">Madam Juliette Nkubana</a></h5>
                  <p className="card-text">Madam Juliette Nkubana is a renowned Rwandan entrepreneur and philanthropist.
                    She holds a Bachelor's degree in Business Administration from the University of Rwanda and has made significant contributions to the community through her various charitable activities.
                    Her work focuses on empowering women and youth, and she has been recognized for her efforts in promoting sustainable development and education.
                    In addition to her philanthropic endeavors, Madam Nkubana is an influential businesswoman and a strong advocate for social justice.
                  </p>
                  <div className="read-more"><a href=""><i className="bi bi-arrow-right"></i> Read More</a></div>
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
  );
}

export default Bios;

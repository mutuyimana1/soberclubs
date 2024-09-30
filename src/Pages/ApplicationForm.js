import React from "react";
import { Layout, Typography, Card, Button } from "antd";
import Navbar from '../Component/Navbar';
import './ApplicationForm.css'; // Custom styles if needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const ApplicationForm = () => {
  return (
    <Layout className="application-form">
      <div className="hero-area">
        <header className="header-section">
          <Navbar />
        </header>
      </div>

      <Content className="content-container">
        <Title level={3} className="main-title" style={{ color: 'white' }}>
          Welcome to Sober International Language & Training Centre (SILT)
        </Title>
        <i>
          <h2 className="location-info" style={{ color: 'white' }}>
            Find us at the former UTB University Building.
          </h2>
        </i>

        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              {/* Additional content if needed */}
            </div>
          </div>

          <div className="row justify-content-center info-section">
            <div className="col-12 col-sm-6 col-lg-4">
              <Card className="info-card" title="We Offer" bordered={false}>
                <Paragraph>
                  Learn Online or Face-to-Face at our Kigali location (former UTB
                  University Building, Sonatubes)
                </Paragraph>
                <Paragraph>
                  Entrepreneurship and specialized unique trainings included.
                </Paragraph>
              </Card>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <Card className="info-card" title="Languages Offered" bordered={false}>
                <ul>
                  <li>German (Deutsch) and Arabic</li>
                  <li>French and English</li>
                  <li>Kinyarwanda and Spanish</li>
                  <li>Portuguese and Chinese</li>
                  <li>Swahili and Korean</li>
                  <li>Japanese and more upon demand</li>
                </ul>
              </Card>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <Card className="info-card" title="Course Fees" bordered={false}>
                <Paragraph>
                  Face-to-Face: 100,000 RWF (100 USD) per month for 3 months
                </Paragraph>
                <Paragraph>
                  Online: 75,000 RWF (75 USD) per month for 3 months
                </Paragraph>
                <Paragraph>Registration Fee: 30,000 RWF (30 USD)</Paragraph>
              </Card>
            </div>
            <br></br>
            <div className="col-12 col-sm-6 col-lg-4">
              <Card className="info-card" title="Why Choose SILT?" bordered={false}>
                <Paragraph>✅ Programs for beginners and beyond</Paragraph>
                <Paragraph>⏰ Flexible schedules: Day, evening, and weekend classes</Paragraph>
                <Paragraph>
                  Entrepreneurship and specialized unique trainings included.
                </Paragraph>
              </Card>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <Card className="info-card" title="Easy Registration Process" bordered={false}>
                <Paragraph>💵 Pay the registration fee and fill out our form.</Paragraph>
                <Paragraph>📞 Our team will contact you right away to get started!</Paragraph>
                <a 
                  className="btn btn-primary btn-lg mt-2" 
                  href="/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apply Here
                </a>
              </Card>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <Card className="info-card" title="Contact Us" bordered={false}>
                <Paragraph>📧 Email: soberclub2024@gmail.com</Paragraph>
                <Paragraph>
                  🌐 Website:{" "}
                  <a
                    href="http://www.soberclubsrwanda.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.soberclubsrwanda.com
                  </a>
                </Paragraph>
                <Paragraph>📞 Call:</Paragraph>
                <ul>
                  <li>Dr. Gamariel: +250 788 872 060</li>
                  <li>Ms. Patience: +250 788 702 881</li>
                  <li>Dr. Fulgence: +250 785 846 400</li>
                  <li>Dr. Amiel: +250 788 461 295</li>
                  <li>Ms. Cynthia: +250 798 528 653</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Add the button for online session here */}
        </div>
        
        <div className="text-center mt-3">
            <a 
              className="btn btn-primary btn-lg" 
              href="https://us05web.zoom.us/j/84757709782?pwd=O47yqW9XHS25gStbbFlEOp5w35ho1c.1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Attend Online Session
            </a>
          </div>


      </Content>

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
    </Layout>
  );
};

export default ApplicationForm;

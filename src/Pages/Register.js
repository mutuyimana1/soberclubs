import React, { useState } from 'react';
import { Form, Input, Button, Select, Typography } from 'antd';
import 'antd/dist/reset.css'; // Correct CSS import for Ant Design v5

const { Option } = Select;
const { Title, Paragraph } = Typography;

const RegistrationForm = () => {
  const [showOtherCountryInput, setShowOtherCountryInput] = useState(false);

  const onCountryChange = (value) => {
    setShowOtherCountryInput(value === 'other');
  };

  const onFinish = (values) => {
    console.log('Received values from form: ', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
                  <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> Program</a>
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

      {/* Description Above the Form */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Title level={3} style={{ color: 'white' }}>The Sober Club</Title>
        <Paragraph style={{ color: 'white' }}>
          <strong>Summer School Program:</strong> Mixes international students with local students from local Universities. Focuses on cultural and educational exchange.
        </Paragraph>
        <Paragraph style={{ color: 'white' }}>
          <strong>Educational Visits and Activities:</strong> Visits to relevant learning institutions (factories, industrial zones, service providers). Includes games and fun stories to enhance learning.
        </Paragraph>
      </div>

      {/* Registration Form */}
      <Form
        name="register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: 400, margin: '0 auto' }}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Middle Name"
          name="middleName"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'The input is not a valid email!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore="+ Country Code" />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: 'Please select your country!' }]}
        >
          <Select placeholder="Select your country" onChange={onCountryChange}>
            <Option value="usa">United States</Option>
            <Option value="uk">United Kingdom</Option>
            <Option value="canada">Canada</Option>
            <Option value="australia">Australia</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        {showOtherCountryInput && (
          <Form.Item
            label="Please Specify"
            name="otherCountry"
            rules={[{ required: true, message: 'Please specify your country!' }]}
          >
            <Input />
          </Form.Item>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Register
          </Button>
        </Form.Item>
      </Form>

      {/* Description Below the Form */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Paragraph style={{ color: 'white' }}>
          The Company works with the Sober Club to bring you these enriching experiences.
        </Paragraph>
      </div>
    </div>
  );
};

export default RegistrationForm;

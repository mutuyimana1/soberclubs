import React from 'react';
import { Form, Input, Button, Radio, Checkbox, message, Select } from 'antd';
import axios from 'axios';
import './RegistrationForm.css'; // Import your custom CSS

const { Option } = Select;

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', values);
      if (response.status === 201) {
        message.success('Registration successful!');
        form.resetFields(); 
      }
    } catch (error) {
      message.error('Registration failed. Please try again.');
      console.error('There was an error submitting the form:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Please complete the required fields.');
  };

  return (
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      <Form
        form={form}
        layout="vertical"
        name="registrationForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
            {
              type: 'email',
              message: 'Please enter a valid email!',
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Your Full Names"
          name="fullName"
          rules={[{ required: true, message: 'Please enter your full name!' }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item
          label="Your Phone Number"
          name="phoneNumber"
          rules={[{ required: true, message: 'Please enter your phone number!' }]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        

        <Form.Item
          label="Mode of Study"
          name="modeOfStudy"
          rules={[{ required: true, message: 'Please select your mode of study!' }]}
        >
          <Radio.Group>
            <Radio value="online">Online</Radio>
            <Radio value="faceToFace">Face to face</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Your Language Program (Minimum 3 languages)"
          name="languages"
          rules={[{ required: true, message: 'Please select at least 3 languages!' }]}
        >
          <Checkbox.Group>
            <Checkbox value="german"> German</Checkbox>
            <Checkbox value="arabic"> Arabic</Checkbox>
            <Checkbox value="french"> French</Checkbox>
            <Checkbox value="english"> English (IELTS)</Checkbox>
            <Checkbox value="kinyarwanda"> Kinyarwanda</Checkbox>
            <Checkbox value="spanish">Spanish</Checkbox>
            <Checkbox value="portuguese">Portuguese</Checkbox>
            <Checkbox value="chinese"> Chinese</Checkbox>
            <Checkbox value="swahili"> Swahili</Checkbox>
            <Checkbox value="korean"> Korean</Checkbox>
            <Checkbox value="japanese"> Japanese</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          label="Specialized Unique Professional Trainings (Minimum 3 programs)"
          name="trainings"
          rules={[{ required: true, message: 'Please select at least 3 training programs!' }]}
        >
          <Checkbox.Group>
            <Checkbox value="incomeProjects">Training in Designing and Supporting Income-generating Projects</Checkbox>
            <Checkbox value="bookWriting">Training in Book Writing and Selling</Checkbox>
            <Checkbox value="visaApplication">Training in Visa Application and Advice on Study, Work & Visit Abroad</Checkbox>
            <Checkbox value="internship">Training in Organization of International Professional Internship</Checkbox>
            <Checkbox value="entrepreneurship">Training in Entrepreneurship</Checkbox>
            <Checkbox value="soberFellowship">Training in Sober Fellowship</Checkbox>
            <Checkbox value="migrationLaws">Training on Migration Laws</Checkbox>
            <Checkbox value="researchWriting">Training in Research, Projects, Thesis, and Dissertation Writing Techniques</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          label="Program of Study"
          name="programOfStudy"
          rules={[{ required: true, message: 'Please select your program of study!' }]}
        >
          <Radio.Group>
            <Radio value="day">Day</Radio>
            <Radio value="evening">Evening</Radio>
            <Radio value="weekend">Weekend</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Place Where You Are Located (Country, District)"
          name="location"
          rules={[{ required: true, message: 'Please enter your location!' }]}
        >
          <Input placeholder="Enter your location (Country, District)" />
        </Form.Item>

        <Form.Item
          label="Any Comments on This Program"
          name="comments"
        >
          <Input.TextArea placeholder="Add any comments here" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;

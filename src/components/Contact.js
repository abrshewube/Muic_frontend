import React from 'react';
import emailjs from '@emailjs/browser';
import { Form, Input, Button, Row, Col, Typography, Divider } from 'antd';

const { Title } = Typography;

const ContactSection = () => {
  const onFinish = (values) => {
    // Your emailjs configuration (replace with your actual values)
    const emailServiceID = 'service_9k7705n';
    const emailTemplateID = 'template_i8i8s3j';
    const userID = 'FfgcCll_2f5M4YY3e';

    // Send the email using emailjs
    emailjs.send(emailServiceID, emailTemplateID, values, userID)
      .then((response) => {
        alert('Successfully sent , we will contact you soon')
        // Handle any further actions after successful email submission
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle error cases if needed
      });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0',marginTop:'35px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Contact Us</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', minHeight: '300px' }}>
            <Form
              name="contactForm"
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your name',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email',
                  },
                  {
                    type: 'email',
                    message: 'Invalid email address',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your message',
                  },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          {/* Add a map here if desired */}
          <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', minHeight: '300px' }}>
            {/* You can add your contact information here */}
            <Title level={4}>Contact Information</Title>
            <Divider />
            <p>Email: example@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;

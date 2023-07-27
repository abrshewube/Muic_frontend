import React from 'react';
import { Layout, Row, Col, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
  return (
    <div className='bot'>
    <Footer style={{ textAlign: 'center' }}>
      <Row justify="center">
        <Col span={20}>
          <Divider />
          <Row gutter={16}>
            <Col md={8} xs={24}>
              <div>
                <Text strong>Important Pages</Text>
                <br />
                <Link to="/">Home</Link>
                <br />
                <Link to="/services">Services</Link>
                <br />
                <Link to="/scholarships">Scholarships</Link>
                {/* Add more important pages links as needed */}
              </div>
            </Col>
            <Col md={8} xs={24}>
              <div>
                <Text strong>Legal Information</Text>
                <br />
                <Link to="/privacy-policy">Privacy Policy</Link>
                <br />
                <Link to="/terms-of-service">Terms of Service</Link>
                {/* Add more legal information links as needed */}
              </div>
            </Col>
            <Col md={8} xs={24}>
              <div>
                <Text strong>Follow Us</Text>
                <br />
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <FacebookOutlined style={{ fontSize: '24px', color: '#1877F2' }} />
                </a>
                <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined style={{ fontSize: '24px', color: '#1DA1F2' }} />
                </a>
                <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined style={{ fontSize: '24px', color: '#C13584' }} />
                </a>
              </div>
            </Col>
          </Row>
          <Divider />
          <div>
            <Text>© 2023 Your Scholarship Consultancy</Text>
          </div>
        </Col>
      </Row>
    </Footer>
    </div>
  );
};

export default AppFooter;

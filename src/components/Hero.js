import { Layout, Typography, Button, Carousel } from 'antd';
import Img from './download.jpeg'
const { Content } = Layout;
const { Title, Text } = Typography;
const HeroSection = () => {
    return (
      <Content style={{ padding: '20px', minHeight: 'calc(100vh - 64px)' }}>
        <Carousel autoplay>
          {/* Placeholder images */}
          <div>
            <img src= {Img} alt="Students 1" />
          </div>
          <div>
            <img src= {Img} alt="Students 2" />
          </div>
          {/* Add more images as needed */}
        </Carousel>
        <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
          <Title>Welcome to Scholarship Consultancy</Title>
          <Text>Your gateway to educational opportunities and scholarships</Text>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" size="large">Get Started</Button>
        </div>
        {/* Add more content and sections as needed */}
      </Content>
    );
  };
  
  export default HeroSection;
  
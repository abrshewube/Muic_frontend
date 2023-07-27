import React from 'react';
import { Layout, Typography, List } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const Services = () => {
  // Sample data for services list
  const servicesData = [
    {
      title: 'Scholarship Search',
      description: 'We help you find scholarships that match your profile, interests, and academic achievements.',
    },
    {
      title: 'Application Assistance',
      description: 'We provide guidance and support throughout the scholarship application process.',
    },
    {
      title: 'Essay Review',
      description: 'Our experts review and provide feedback on your scholarship essays for better chances of success.',
    },
    // Add more services as needed
  ];

  return (
    <Content style={{ padding: '20px', minHeight: 'calc(100vh - 64px)',marginTop:'25px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title>Our Services</Title>
      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <List
          itemLayout="vertical"
          dataSource={servicesData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<Title level={4}>{item.title}</Title>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
      {/* Add more content and sections as needed */}
    </Content>
  );
};

export default Services;

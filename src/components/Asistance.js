import React from 'react';
import { Card, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const ApplicationAssistanceSection = () => {
  // Replace with your actual information
  const assistanceData = [
    {
      title: 'Personalized Guidance',
      description: 'Our team of experts provides personalized assistance to help you navigate the scholarship application process and increase your chances of success.',
    },
    {
      title: 'Essay Review',
      description: 'We offer essay review services to ensure your scholarship essays are compelling, well-written, and stand out to scholarship committees.',
    },
    {
      title: 'Application Tips',
      description: 'Get valuable tips and advice on filling out scholarship applications, meeting deadlines, and optimizing your application package.',
    },
    // Add more services as needed
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0',marginTop:'35px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Application Assistance</Title>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {assistanceData.map((assistance, index) => (
          <Card key={index} style={{ width: '300px', margin: '10px' }}>
            <Title level={4}>{assistance.title}</Title>
            <Paragraph>{assistance.description}</Paragraph>
          </Card>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button type="primary" size="large" href="/contact">Contact Us</Button>
      </div>
    </div>
  );
};

export default ApplicationAssistanceSection;

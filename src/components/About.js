import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUsSection = () => {
  // Replace with your actual information
  const aboutUsContent = {
    title: 'About Us',
    history: 'Our consultancy was founded in [year], with a mission to help students achieve their educational dreams by providing expert guidance and support in securing scholarships and opportunities.',
    mission: 'Our mission is to empower students from diverse backgrounds to access quality education by connecting them with scholarship opportunities and resources.',
    team: [
      {
        name: 'John Doe',
        role: 'CEO',
        bio: 'John is a seasoned education consultant with over 10 years of experience. He is passionate about helping students succeed in their academic journey.',
      },
      {
        name: 'Jane Smith',
        role: 'Marketing Manager',
        bio: 'Jane is a marketing expert with a focus on educational outreach. She strives to spread awareness about scholarship opportunities.',
      },
      // Add more team members as needed
    ],
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0',marginTop:'35px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>{aboutUsContent.title}</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', minHeight: '300px' }}>
            <Paragraph>{aboutUsContent.history}</Paragraph>
            <Paragraph>{aboutUsContent.mission}</Paragraph>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', minHeight: '300px' }}>
            <Title level={4}>Our Team</Title>
            {aboutUsContent.team.map((member, index) => (
              <div key={index}>
                <Title level={5}>{member.name}</Title>
                <Paragraph type="secondary">{member.role}</Paragraph>
                <Paragraph>{member.bio}</Paragraph>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsSection;

import React from 'react';
import { Avatar, Card, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const TeamSection = () => {
  // Sample team members data
  const teamMembersData = [
    {
      name: 'John Doe',
      photo: 'https://placeimg.com/100/100/people',
      jobTitle: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in justo at nisi congue commodo vitae sit amet neque.',
    },
    {
      name: 'Jane Smith',
      photo: 'https://placeimg.com/100/100/people',
      jobTitle: 'Marketing Manager',
      description: 'Quisque eu velit eu purus placerat luctus. Sed nec felis eget odio malesuada ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    },

    {
      name: 'Abrham Wube',
      photo: 'https://placeimg.com/100/100/people',
      jobTitle: 'Marketing Manager',
      description: 'Quisque eu velit eu purus placerat luctus. Sed nec felis eget odio malesuada ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    },
    {
      name: 'Abrham Wube',
      photo: 'https://placeimg.com/100/100/people',
      jobTitle: 'Marketing Manager',
      description: 'Quisque eu velit eu purus placerat luctus. Sed nec felis eget odio malesuada ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    },
    {
      name: 'Abrham Wube',
      photo: 'https://placeimg.com/100/100/people',
      jobTitle: 'Marketing Manager',
      description: 'Quisque eu velit eu purus placerat luctus. Sed nec felis eget odio malesuada ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    },
    {
      name: 'Abrham Wube',
      photo: 'https://placeimg.com/100/100/people',
      jobTitle: 'Marketing Manager',
      description: 'Quisque eu velit eu purus placerat luctus. Sed nec felis eget odio malesuada ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    },
    // Add more team members as needed
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', marginTop:'30px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Our Team</Title>
      <Row gutter={[16, 16]} justify="center">
        {teamMembersData.map((member, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card style={{ textAlign: 'center', height: '100%' }}>
              <Avatar size={100} src={member.photo} alt={member.name} />
              <Title level={4} style={{ marginTop: '10px' }}>{member.name}</Title>
              <Text type="secondary">{member.jobTitle}</Text>
              <Text>{member.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamSection;

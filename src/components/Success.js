import React from 'react';
import Img from './download.jpeg'
import { Carousel, Typography, Avatar, Row, Col } from 'antd';

const { Title, Text } = Typography;

const SuccessStoriesSection = () => {
  // Sample success stories data
  const successStoriesData = [
    {
      name: 'John Doe',
      photo: Img,
      quote: 'Thanks to the expert guidance from this consultancy, I secured a full scholarship for my dream university. I couldn\'t have done it without their support!',
    },
    {
      name: 'Jane Smith',
      photo: Img,
      quote: 'I am grateful for the team\'s assistance in reviewing my scholarship essays. Their feedback and tips helped me stand out among other applicants.',
    },
    {
        name: 'Abrham',
        photo: Img,
        quote: 'I am grateful for the team\'s assistance in reviewing my scholarship essays. Their feedback and tips helped me stand out among other applicants.',
      },
    // Add more success stories as needed
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0',marginTop:'35px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Success Stories</Title>
      <Carousel autoplay dots={false}>
        {successStoriesData.map((story, index) => (
          <div key={index}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
              <Avatar size={100} src={story.photo} alt={story.name} />
              <Title level={4} style={{ marginTop: '10px' }}>{story.name}</Title>
              <Text style={{ textAlign: 'center' }}>{story.quote}</Text>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SuccessStoriesSection;

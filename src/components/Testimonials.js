import React from 'react';
import { Carousel, Typography, Avatar, Row, Col } from 'antd';

const { Title, Text } = Typography;

const Testimonials = () => {
  // Sample testimonials data
  const testimonialsData = [
    {
      name: 'John Doe',
      photo: 'https://placeimg.com/100/100/people',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in justo at nisi congue commodo vitae sit amet neque.',
    },
    {
      name: 'Jane Smith',
      photo: 'https://placeimg.com/100/100/people',
      feedback: 'Quisque eu velit eu purus placerat luctus. Sed nec felis eget odio malesuada ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    },
    // Add more testimonials as needed
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Testimonials</Title>
      <Carousel autoplay dots={false}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
              <Avatar size={100} src={testimonial.photo} alt={testimonial.name} />
              <Title level={4} style={{ marginTop: '10px' }}>{testimonial.name}</Title>
              <Text style={{ textAlign: 'center' }}>{testimonial.feedback}</Text>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;

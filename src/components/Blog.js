
import React from 'react';
import Img from './download.jpeg'
import { List, Typography } from 'antd';

const { Title } = Typography;

const BlogSection = () => {
  // Sample blog posts data
  const blogPostsData = [
    {
      title: 'Top 10 Scholarships for STEM Students',
      image: Img,
    },
    {
      title: 'Tips for Writing a Winning Scholarship Essay',
      image: Img,
    },
    // Add more blog posts as needed
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0',marginTop:'25px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Latest Articles</Title>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={blogPostsData}
        renderItem={(item) => (
          <List.Item>
            <div style={{ textAlign: 'center' }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <Title level={4} style={{ marginTop: '10px' }}>{item.title}</Title>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogSection;

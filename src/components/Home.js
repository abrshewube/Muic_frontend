import React from 'react';
import { Layout, Typography, Button } from 'antd';
import Hero from './Hero'
import Testimonials from './Testimonials'

const { Content } = Layout;



const Home = () => {
  return (
    <Content style={{ padding: '20px', minHeight: 'calc(100vh - 64px)',marginTop:'100px' }}>
    <Hero/>
    <Testimonials/>
    </Content>
  );
};

export default Home;

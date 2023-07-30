


import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" style={{ float: 'left', color: '#fff', fontSize: '24px', marginRight: '24px' }}>
       Sucess Consultancy
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }}>
        <Menu.Item key="home">
          <Link to="/">Home</Link> {/* If using React Router, link to your homepage */}
        </Menu.Item>
        <Menu.Item key="services">
          <Link to="/services">Services</Link> {/* Link to your services page */}
        </Menu.Item>
        
        {/* Add more menu items as needed */}

        <Menu.Item key="faq">
          <Link to="/faq">FAQ</Link> {/* Link to your scholarships page */}
        </Menu.Item>
        <Menu.Item key="team">
          <Link to="/team">Team</Link> {/* Link to your scholarships page */}
        </Menu.Item>
        <Menu.Item key="blog">
          <Link to="/blog">Blog</Link> {/* Link to your scholarships page */}
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact">Contact</Link> {/* Link to your scholarships page */}
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link> {/* Link to your scholarships page */}
        </Menu.Item>
        

       
      </Menu>
    </Header>
  );
};

export default AppHeader;


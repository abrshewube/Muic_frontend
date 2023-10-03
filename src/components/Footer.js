import React from "react";
import styled from "@emotion/styled";
import { space, typography, color } from "styled-system";

// Create a styled footer container
const FooterContainer = styled.footer`
  background-color: #333; /* Background color */
  color: white; /* Text color */
  padding: 20px 0; /* Padding at the top and bottom */
  text-align: center; /* Center-align text */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Create a styled footer text
const FooterText = styled.p`
  margin: 0;
  ${typography}
`;

// Create a styled link for the GitHub icon
const GitHubLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 24px;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText fontSize={16}>
        &copy; {new Date().getFullYear()} Simple Music App
      </FooterText>
      
      <FooterText fontSize={12}>Made by Dawit Minale</FooterText>
    </FooterContainer>
  );
};

export default Footer;

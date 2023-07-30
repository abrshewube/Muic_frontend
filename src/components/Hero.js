// import { Layout, Typography, Button, Carousel } from 'antd';
// import Img from './download.jpeg'
// const { Content } = Layout;
// const { Title, Text } = Typography;
// const HeroSection = () => {
//     return (
//       <Content style={{ padding: '20px', minHeight: 'calc(100vh - 64px)' }}>
        
//         <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
//           <Title>Welcome to Scholarship Consultancy</Title>
//           <Text>Your gateway to educational opportunities and scholarships</Text>
//         </div>
//         <div style={{ textAlign: 'center',margin:'50px' }}>
//           <Button type="primary" size="large">Get Started</Button>
//         </div>
//         {/* Add more content and sections as needed */}

//         <div style={{ flex: 1 }}>
//           <Carousel autoplay style={{marginLeft:'400px'}}>
//             {/* Images */}
//             <div>
//               <img src={Img} alt="Students 1" style={{ width: '50%', borderRadius: '10px' }} />
//             </div>
//             <div>
//               <img src={Img} alt="Students 2" style={{ width: '50%', borderRadius: '10px' }} />
//             </div>
//             <div>
//               <img src={Img} alt="Students 3" style={{ width: '50%', borderRadius: '10px' }} />
//             </div>
//             {/* Add more images as needed */}
//           </Carousel>
//         </div>
//       </Content>
//     );
//   };
  
//   export default HeroSection;



import React from 'react';
import { Layout, Typography, Button, Carousel } from 'antd';
import Img1 from './America.png';
import Img2 from './Canada.png';
import Img3 from './Bretain.png';

const { Content } = Layout;
const { Title, Text } = Typography;

const HeroSection = () => {
  const slogans = [
    "Unlock Your Potential",
    "Empowering Dreams, Transforming Lives",
    "Achieve the Education You Deserve",
  ];

  return (
    <Content style={{ padding: '20px', minHeight: 'calc(100vh - 64px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
        <Title>Welcome to  Sucess Consultancy</Title>
        <Text>Your gateway to educational opportunities and scholarships</Text>
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {slogans.map((slogan, index) => (
            <Text key={index} style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px' }}>{slogan}</Text>
          ))}
        </div>
        <div style={{ marginTop: '30px' }}>
          <a  href='/contact'> <Button type="primary" size="large">Get Started</Button></a>
         
        </div>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Carousel autoplay style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div>
            <img src={Img1} alt="Students 1" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div>
            <img src={Img2} alt="Students 2" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div>
            <img src={Img3} alt="Students 3" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
        </Carousel>
      </div>
      {/* Add more content and sections as needed */}
    </Content>
  );
};

export default HeroSection;


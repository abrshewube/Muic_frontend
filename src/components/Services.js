// import React from 'react';
// import { Layout, Typography, List } from 'antd';

// const { Content } = Layout;
// const { Title } = Typography;

// const Services = () => {
//   // Sample data for services list
//   const servicesData = [
//     {
//       title: 'Scholarship Search',
//       description: 'We help you find scholarships that match your profile, interests, and academic achievements.',
//     },
//     {
//       title: 'Application Assistance',
//       description: 'We provide guidance and support throughout the scholarship application process.',
//     },
//     {
//       title: 'Essay Review',
//       description: 'Our experts review and provide feedback on your scholarship essays for better chances of success.',
//     },
//     // Add more services as needed
//   ];

//   return (
//     <Content style={{ padding: '20px', minHeight: 'calc(100vh - 64px)',marginTop:'25px' }}>
//       <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//         <Title>Our Services</Title>
//       </div>
//       <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//         <List
//           itemLayout="vertical"
//           dataSource={servicesData}
//           renderItem={(item) => (
//             <List.Item>
//               <List.Item.Meta
//                 title={<Title level={4}>{item.title}</Title>}
//                 description={item.description}
//               />
//             </List.Item>
//           )}
//         />
//       </div>
//       {/* Add more content and sections as needed */}
//     </Content>
//   );
// };

// export default Services;


import React from 'react';
import { Layout, Typography, List } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const Services = () => {
  // Sample data for services list
  const servicesData = [
    {
      title: 'Scholarship Search',
      description: 'We help you find scholarships that match your profile, interests, and academic achievements.',
    },
    {
      title: 'Application Assistance',
      description: 'We provide guidance and support throughout the scholarship application process.',
    },
    {
      title: 'Essay Review',
      description: 'Our experts review and provide feedback on your scholarship essays for better chances of success.',
    },
    {
      title: 'Scholarship Matching',
      description: 'We evaluate your profile and match you with scholarships that align with your academic achievements, interests, and goals.',
    },
    {
      title: 'Financial Aid Advice',
      description: 'Get information on various financial aid options beyond scholarships, such as grants, fellowships, and loans.',
    },
    {
      title: 'Interview Preparation',
      description: 'Prepare for scholarship interviews with our coaching, mock interviews, and tips for effective presentation.',
    },
    {
      title: 'Scholarship Deadline Tracking',
      description: 'We keep track of scholarship application deadlines and ensure you submit applications on time.',
    },
    {
      title: 'Scholarship Essay Workshops',
      description: 'Join our workshops to improve your essay writing skills and craft compelling scholarship essays.',
    },
    {
      title: 'Scholarship Renewal Support',
      description: 'We assist in understanding the renewal process for scholarships that require continuation or maintenance.',
    },
    // Add more services as needed
  ];

  return (
    <Content style={{ padding: '20px', minHeight: 'calc(100vh - 64px)', marginTop: '25px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title level={2} style={{ color: '#1890ff', fontWeight: 'bold' }}>Our Services</Title>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <List
          itemLayout="vertical"
          dataSource={servicesData}
          renderItem={(item) => (
            <List.Item style={{ background: '#f9f9f9', padding: '16px', borderRadius: '8px', marginBottom: '16px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <List.Item.Meta
                title={<Title level={4} style={{ marginBottom: '8px' }}>{item.title}</Title>}
                description={<Typography style={{ fontFamily: 'fantasy' }}>{item.description}</Typography>  }
              />
            </List.Item>
          )}
        />
      </div>
      {/* Add more content and sections as needed */}
    </Content>
  );
};

export default Services;

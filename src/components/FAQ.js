import React from 'react';
import { Collapse, Typography } from 'antd';

const { Panel } = Collapse;
const { Title } = Typography;

const FAQ = () => {
  return (
    <div style={{ padding: '20px' ,marginTop:'50px'}}>
      <Title level={2}>Frequently Asked Questions</Title>
      <Collapse accordion>
        {/* Question 1 */}
        <Panel header="What scholarships are available?" key="1">
          <p>
            There are various scholarships available based on academic merit, financial need, field of study, and more. We
            provide a comprehensive database of scholarships to match your profile and interests.
          </p>
        </Panel>
        {/* Question 2 */}
        <Panel header="How do I apply for scholarships?" key="2">
          <p>
            The application process varies for each scholarship. Generally, you'll need to fill out an application form,
            provide supporting documents, and submit any required essays or recommendations. We can assist you with the
            application process and ensure you meet all requirements.
          </p>
        </Panel>
        {/* Question 3 */}
        <Panel header="Am I eligible for scholarships?" key="3">
          <p>
            Eligibility criteria differ for each scholarship and may include factors such as academic performance,
            extracurricular activities, nationality, and financial need. Our team will assess your profile and recommend
            scholarships where you have the best chance of success.
          </p>
        </Panel>
        {/* Add more FAQs as needed */}

        <Panel header="What other financial aid options are available?" key="4">
          <p>
          In addition to scholarships, there are other financial aid options such as grants, fellowships, and student loans. We can advise you on various
           funding sources and their requirements.
          </p>
        </Panel>
        
        <Panel header="How can I increase my chances of winning a scholarship??" key="5">
          <p>
          Our application coaches will provide you with personalized tips and strategies to improve your chances of winning scholarships. This may include highlighting your achievements
           and aligning your goals with scholarship criteria.
          </p>
        </Panel>
        <Panel header="What should I do if I don't get selected for a scholarship?" key="6">
          <p>
          Rejection is a natural part of the scholarship process. Our team will support and encourage you to explore alternative funding 
          options and continue applying for other opportunities.
          </p>
        </Panel>
        <Panel header="What is the difference between scholarships and grants?" key="7">
          <p>
          Scholarships and grants are both forms of financial aid, but they differ in their criteria. Scholarships are often awarded based on merit, while grants are usually need-based. We can help you understand the 
          distinctions and explore available options
          </p>
        </Panel>
        <Panel header="Can I apply for multiple scholarships simultaneously?" key="8">
          <p>
          Yes, you can apply for multiple scholarships simultaneously. Our application coaches will help you manage multiple applications efficiently, ensuring
           you meet all deadlines and requirements.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FAQ;

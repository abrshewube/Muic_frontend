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
      </Collapse>
    </div>
  );
};

export default FAQ;

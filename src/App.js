import Header from './components/Header'
import { Layout } from 'antd';
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Home from './components/Home'
import Services from './components/Services'
import Scholarships from './components/Scholarships'
import Team from './components/Team'
import Blog from './components/Blog'
import Contact from './components/Contact'
import About from './components/About'
import Success from './components/Success'
import Asistance from './components/Asistance'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
const { Content } = Layout;
function App() {
  return (
    <div >
     <Layout>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
         
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sucess" element={<Success />} />
       
          {/* Add more routes for other pages/components as needed */}
        </Routes>
      <Footer/>
      <Content>
        {/* Your other components and content go here */}
      </Content>
    </Layout>

   
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SongList from "./components/SongList";
import CreateSong from "./components/CreateSong";
import Footer from "./components/Footer";
import AboutPage from "./components/About";

function App() {
  return (
    <Router>
      <Header />
      <br/><br/><br/>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/create" element={<CreateSong />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <br/><br/><br/>
      <Footer/>
    </Router>
  );
}

export default App;

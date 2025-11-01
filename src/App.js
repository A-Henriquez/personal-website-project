import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/experience" element={<h1>Experience Page</h1>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects" element={<h1>Projects Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
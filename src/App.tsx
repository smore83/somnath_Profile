import React, { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import ContactForm from "./components/pages/ContactForm";
import Projects from "./components/pages/Projects";
import Layout from "./components/templates/Layout";
import Resume from "./components/pages/Resume";
import Particle from "../src/utils/particle";
import AnimationCursor from "./components/molecules/AnimationCursor";

function App() {


  return (
    <div>
      <AnimationCursor/>
      <Particle/>
      <Routes>
        <Route path="/somnath_Profile/" element={<Home />} />
        <Route path="/somnath_Profile/about" element={<AboutMe />} />
        <Route path="/somnath_Profile/project" element={<Projects />} />
        <Route path="/somnath_Profile/contact" element={<ContactForm />} />
        <Route path="/somnath_Profile/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;

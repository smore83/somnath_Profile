import React from "react";
import Dashboard from "./components/pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import ContactForm from "./components/pages/ContactForm";
import Projects from "./components/pages/Projects";
import Layout from "./components/pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/somnath_Profile/"
          element={
            <Layout>
              {" "}
              <Dashboard />{" "}
            </Layout>
          }
        />
        <Route
          path="/somnath_Profile/about"
          element={
            <Layout>
              {" "}
              <AboutMe />{" "}
            </Layout>
          }
        />
        <Route
          path="/somnath_Profile/project"
          element={
            <Layout>
              {" "}
              <Projects />{" "}
            </Layout>
          }
        />
        <Route
          path="/somnath_Profile/contact"
          element={
            <Layout>
              {" "}
              <ContactForm />{" "}
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;

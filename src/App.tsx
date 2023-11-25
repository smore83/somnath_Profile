import React from "react";
import Dashboard from "./components/pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import ContactForm from "./components/pages/ContactForm";
import Projects from "./components/pages/Projects";
import Layout from "./components/pages/Layout";
import BasicTable from "./components/pages/Table";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {" "}
              <Home />{" "}
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              {" "}
              <AboutMe />{" "}
            </Layout>
          }
        />
        <Route
          path="/project"
          element={
            <Layout>
              {" "}
              <Projects />{" "}
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              {" "}
              <ContactForm />{" "}
            </Layout>
          }
        />
        <Route
          path="/resume"
          element={
            <Layout>
              {" "}
              <Resume />{" "}
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;

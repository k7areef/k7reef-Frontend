import React from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
// Pages:
import HomePage from "@pages/HomePage";
import ProjectsPage from "@pages/ProjectsPage";
import ProjectDetailPage from "@pages/ProjectDetailPage";
// Common Components:
import NavigationBar from "@components/layout/NavigationBar";
import Footer from "@components/layout/Footer";

function App() {

  React.useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 50
    });
  }, []);

  return (
    <div className="App bg-dark text-white min-h-screen">
      {/* Navigation */}
      <NavigationBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} /> */}
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;
import React from "react";
import { useLocation } from 'react-router-dom';
import AboutMyself from "../components/AboutMyself";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectReview from "../components/ProjectReview";

function Home() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/'){
      document.title= "Julio Filizzola";

      // document.getElementById("favicon").href = <FaBeer/>;
    }
  });
  return (
    <div>
      <Header />
      <AboutMyself />
      <ProjectReview />
      <Footer />
    </div>
  );
}

export default Home;
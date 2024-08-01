import React from "react";
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"



function App() {
 
  return (
    <main>
      <div className={`outer-container`}>
        <div className="inner-container">
          <Navbar/>
          <Hero/>
          <Features/>
          <Footer/>
        </div>
      </div>
    </main>
  );
}

export default App;
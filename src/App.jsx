import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import the Router
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfiniteMarquee from "./components/InfiniteMarquee";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    // 1. Everything that uses React Router hooks (like Navbar) must be INSIDE this tag
    <BrowserRouter>
      <div className="bg-slate-50 antialiased overflow-x-hidden">
        <Navbar /> 
        <main>
          <Hero />
          {/*<div className="py-2 -mb-8 overflow-hidden">*/}
  {/* py-2: Minimum vertical padding */}
  {/* -mb-8: Negative margin to pull the next section closer */}
  {/*<InfiniteMarquee />*/}
{/*</div>*/}
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
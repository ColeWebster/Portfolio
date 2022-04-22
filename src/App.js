import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <main className="text-stone-300 bg-sky-700">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/*<Contact /> */}
    </main>
  );
}

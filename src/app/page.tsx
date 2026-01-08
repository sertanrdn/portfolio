import About from "../components/About";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <main className="pt-20 min-h-screen">
        {/* Intro */}
        <Intro />
        {/* About */}
        <About />
        {/* Projects */}
        <Projects />
        {/* Skills */}
        {/* Contact */}
      </main>
    </>
  );
}

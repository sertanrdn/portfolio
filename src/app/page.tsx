import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <main className="pt-20 min-h-screen">
        {/* Intro */}
        <Intro />
        {/* About */}
        {/* Projects */}
        {/* Skills */}
        {/* Contact */}
      </main>
    </>
  );
}

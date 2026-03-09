import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}

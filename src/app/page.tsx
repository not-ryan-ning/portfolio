import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollNav from "@/components/ScrollNav";
import VineToggle from "@/components/VineToggle";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <VineToggle />
      <main className="min-h-screen relative">
        <div className="page-container">
          <ScrollNav />
          <Hero />
          <Projects />
          <About />
          <Contact />
        </div>
      </main>
    </>
  );
}

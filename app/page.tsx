import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";
import EuFunds from "./components/EuFunds";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <WhyUs />
        <EuFunds />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

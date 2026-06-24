import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import WhyUs from "./components/WhyUs";
import EuFunds from "./components/EuFunds";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ELDING projekt d.o.o.",
  description:
    "Projektiranje i ugradnja solarnih elektrana, elektroprojektiranje, energetski auditi i konzultacije za EU fondove.",
  url: "https://elding-solar.vercel.app",
  telephone: "+385",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Đakovo",
    addressRegion: "Osječko-baranjska županija",
    addressCountry: "HR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.308,
    longitude: 18.409,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 45.308,
      longitude: 18.409,
    },
    geoRadius: "100000",
  },
  serviceType: [
    "Ugradnja solarnih elektrana",
    "Elektroprojektiranje",
    "Energetski audit",
    "Konzultacije za EU fondove",
  ],
  priceRange: "$$",
  image: "https://elding-solar.vercel.app/elding_projekti.jpeg",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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

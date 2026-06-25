import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Story from "./components/Story";
import Products from "./components/Products";
import SizeGuide from "./components/SizeGuide";
import Testimonials from "./components/Testimonials";
import Shipping from "./components/Shipping";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Story />
        <Products />
        <SizeGuide />
        <Testimonials />
        <Shipping />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

import Header from "@/components/Header";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <WhatsAppFloatingButton />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

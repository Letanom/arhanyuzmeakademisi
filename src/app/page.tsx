import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import AboutUs from "@/components/AboutUs";
import PhotoGallery from "@/components/PhotoGallery";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative bg-white">
      {/* Fixed navbar */}
      <Navbar />
      
      {/* Hero section with water animation */}
      <Hero />
      
      {/* Main content sections */}
      <div className="relative z-10">
        <Programs />
        <AboutUs />
        <PhotoGallery />
        <Team />
        <Testimonials />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}

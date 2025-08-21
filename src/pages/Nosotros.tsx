import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

const Nosotros = () => {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Header />
      <main className="pt-16">
        <AboutSection />
        <MissionVisionSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Nosotros;
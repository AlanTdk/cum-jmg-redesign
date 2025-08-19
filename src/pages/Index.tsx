import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EducationalOffer from "@/components/EducationalOffer";
import CampusSection from "@/components/CampusSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Header />
      <main>
        <HeroSection />
        <EducationalOffer />
        <CampusSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

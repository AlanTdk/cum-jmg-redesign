import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EducationalOffer from "@/components/EducationalOffer";
import CampusSection from "@/components/CampusSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <EducationalOffer />
        <CampusSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

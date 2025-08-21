import Header from "@/components/Header";
import CampusSection from "@/components/CampusSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

const Campus = () => {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Header />
      <main className="pt-16">
        <CampusSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Campus;
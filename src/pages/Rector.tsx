import Header from "@/components/Header";
import RectorMessageSection from "@/components/RectorMessageSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

const Rector = () => {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Header />
      <main className="pt-16">
        <RectorMessageSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Rector;
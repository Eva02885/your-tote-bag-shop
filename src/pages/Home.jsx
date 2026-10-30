
import Button from "../components/Button";
import Explore from "../components/Explore";
import FashionCategorySection from "../components/FashionCategorySection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import AvailableStockSection from "../components/AvailableStockSection";

function Home() {
  return (
    <>
      <Nav />
      <Button />
      <Hero />
      <AvailableStockSection />
      <FashionCategorySection />
      <Explore />
      <Footer />
    </>
  );
}

export default Home;

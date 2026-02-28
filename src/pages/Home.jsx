import Footer from "../components/Footer";
import Cta from "../components/Home/Cta";
import Hero from "../components/Home/Hero";
import LatestListings from "../components/Home/LatestListings";
import Plans from "../components/Home/Plans";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestListings />
      <Plans />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;

import Hero from "../components/Home/Hero";
import Mission from "../components/Home/Mission";
import Participate from "../components/Home/Participate";
import Quote from "../components/Home/Quote";
import Work from "../components/Home/Work";
import Newsletter from "../components/Home/Newsletter";
import HireUs from "../components/Home/HireUs";
import Donate from "../components/Home/Donate";

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Newsletter />
      <Quote />
      <Work />
      <Participate />
      <HireUs />
      <Donate />
    </div>
  );
};

export default Home;


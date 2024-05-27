import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import PopularDestinations from "../components/PopularDestinations";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <NavBar />
      <HeroSection />
      <PopularDestinations />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default Index;
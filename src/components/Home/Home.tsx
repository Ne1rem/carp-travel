import { Inter } from "next/font/google";
import About from "../About/About";
import Career from "../Career/Career";
import Contacts from "../Contacts/Contacts";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800", "900"],
});

const Home = () => {
  return (
    <main className={`${inter.className} absolute top-0 left-0 right-0`}>
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery/>
      <Contacts />
    </main>
  );
};

export default Home;

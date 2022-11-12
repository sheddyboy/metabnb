import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CTA from "./layout/CTA";
import Hero from "./layout/Hero";
import Overview from "./layout/Overview";
import Sponsors from "./layout/Sponsors";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Sponsors />
      <Overview />
      <CTA />
      <Footer />
    </>
  );
}

export default App;

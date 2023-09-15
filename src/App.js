import { Carousel } from "bootstrap";
import "./App.css";
import Brands from "./components/brands/Brands";
import FAQ from "./components/faq/FAQ";
import Header from "./components/header/Header";
import ModelSelector from "./components/models/ModelSelector";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CarCarousel from "./components/carousel/CarCarousel";
import Testimonials from "./components/testimonials/Testimonials";
import SaveBig from "./components/save-big/SaveBig";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brands />
      <ModelSelector />
      <SaveBig />
      <CarCarousel />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

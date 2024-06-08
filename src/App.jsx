import { Route, Routes } from "react-router-dom";

import About from "./Component/About/About";
import Service from "./Component/Service/Service";
import Home from "./Component/Home/Home";
import Gallery from "./Component/Gallery/Gallery";
import Contact from "./Component/Contact/Contact";
import Appointment from "./Component/Appointment/Appointment";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

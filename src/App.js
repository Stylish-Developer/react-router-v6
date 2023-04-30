import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
import OrderSummary from "./components/OrderSummary";
import _404 from './components/404';

// -- app component
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<_404 />} />
      </Routes>
    </>
  );
};

export default App;

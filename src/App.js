import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatchRoute from "./components/404";
import Products from "./components/Products";
import Featured from "./components/FeaturedProducts";
import New from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/userDetails";
import Admin from "./components/admin";

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
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
    </>
  );
};

export default App;

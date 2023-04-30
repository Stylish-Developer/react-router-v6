import { Link } from "react-router-dom";
import '../../assets/css/Navbar_style.css';

// -- Navbar component
const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </>
  );
};

export default Navbar;

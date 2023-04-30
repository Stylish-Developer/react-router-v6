import { NavLink } from "react-router-dom";
import "../../assets/css/Navbar_style.css";

// -- Navbar component
const Navbar = () => {
  // -- we can also do the same with js programmatically

  const navStyle = ({ isActive }) => {
    if (isActive) {
      return {
        color: "chartreuse",
        textDecoration: "underline wavy orange",
      };
    }
  };

  return (
    <>
      <nav>
        <NavLink to="/" style={navStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={navStyle}>
          About
        </NavLink>
        <NavLink to="contact" style={navStyle}>
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;

// ---------- note ----------
// with the help of this NavLink component from router we can know whether or not the link is active or not
// we can do some css styling with this navLink component. it's provide class attribute and also is active property
// ---------- x ----------

// -- instead of this
{
  /* <nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="contact">Contact</Link>
</nav>; */
}

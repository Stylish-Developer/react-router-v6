// -- products component
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h3>List of Products products</h3>
      <input type="search" placeholder="search products here..." />
      <nav className="secondaryNav">
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;

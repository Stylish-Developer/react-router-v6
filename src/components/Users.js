// -- user component

import { Link, Outlet } from "react-router-dom";

const Users = () => {
  const linkStyle = {
    marginLeft: "50px",
  };
  return (
    <>
      <Link to="/users/1 " style={linkStyle}>
        user 1
      </Link>
      <Link to="/users/2 " style={linkStyle}>
        user 2
      </Link>
      <Link to="/users/3 " style={linkStyle}>
        user 3
      </Link>
      <Outlet />
    </>
  );
};

export default Users;

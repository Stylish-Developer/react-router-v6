// -- user component

import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { data } from "../assets/data/allUser";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showActiveUser = searchParams.get("filter") == "active";

  const linkStyle = {
    marginLeft: "50px",
  };

  const divStyle = {
    marginTop: "30px",
    marginBottom: "30px",
  };

  const onlineStyle = {
    height: "auto",
    width: "auto",
    border: "1px solid ",
    borderRadius: 50,
    backgroundColor: "lawngreen",
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
      <div style={divStyle}>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Show Active User
        </button>
        <button onClick={() => setSearchParams({})}>Show All User</button>
      </div>

      {showActiveUser ? (
        <div>
          <ul>
            {data.slice(0, 3).map((value, i) => (
              <li key={i}>
                {value} <span style={onlineStyle}>.</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            {data.map((value, i) => (
              <li key={i}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Users;

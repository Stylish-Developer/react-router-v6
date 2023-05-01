// -- login component

import { useState } from "react";
import { useAuth } from "../utils/Auth";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const reDirect = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(reDirect, { replace: true });
  };
  return (
    <>
      <label htmlFor="username">username:</label>
      <input
        id="username"
        name="username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
    </>
  );
};

export default Login;

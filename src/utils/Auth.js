// -- step 2: handle whether the user is logged in or not by using functionality

import { createContext, useState, useContext } from "react";

//---------------------------------------------------------------------------
// -- create a context
export const AuthContext = createContext(null); //by default value is null

//-----------------------------xxxx------------------------------------------

//---------------------------------------------------------------------------
// -- create a useContext function for reuse
export const useAuth = () => {
  return useContext(AuthContext);
};

//-----------------------------xxxx------------------------------------------

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;

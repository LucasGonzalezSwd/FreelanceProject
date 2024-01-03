import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
export const UserContext = createContext();

/* eslint-disable-next-line react/prop-types */
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
      setUser({ username: storedUsername, password: storedPassword });
    }
  }, []);
  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("username", newUser.username);
    localStorage.setItem("password", newUser.password);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

/* eslint-disable-next-line react-refresh/only-export-components */
export const useUser = () => {
  return useContext(UserContext);
};
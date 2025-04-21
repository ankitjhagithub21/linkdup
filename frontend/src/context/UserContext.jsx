import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {}
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/current`, {
          credentials: "include"
        });

        const data = await res.json();

        if (res.ok && data.success) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      }
    };

    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

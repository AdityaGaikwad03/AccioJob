import { createContext, useState } from "react";

export const UserPreferencesContext = createContext();

export function UserPreferencesProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("Guest");

  return (
    <UserPreferencesContext.Provider
      value={{ theme, setTheme, username, setUsername }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
}

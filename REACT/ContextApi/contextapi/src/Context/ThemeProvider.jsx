import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggle(){
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return(
    <ThemeContext.Provider value={{theme, toggle}}>
        {children}
        </ThemeContext.Provider>  
    )
}
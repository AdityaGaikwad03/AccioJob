import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import Navbar from './Navbar'

export default function Home() {
   let {theme, toggle} = useContext(ThemeContext)
  return (
    <div style={{
        background : theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#222" : "#fff",
        height: "100vh",
        padding: "10px"
    }}>
        <Navbar/> 
        <h2>Current Theme: {theme}</h2>
        <button onClick={toggle}>Toogle Theme</button>
    </div>
  )
}

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Overview from "./Components/Overview";
import { UserPreferencesProvider } from "./Components/UserPreferencesContext";
import Settings from "./Components/Settings";
import "./App.css";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <UserPreferencesProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Overview</Link> | <Link to="/settings">Settings</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </UserPreferencesProvider>
      </div>
    </div>
  )
}

export default App;
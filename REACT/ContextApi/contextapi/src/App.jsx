import "./App.css";
// import ThemeProvider from "./Context/ThemeProvider";

// import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* <ThemeProvider>
          // <Home/>
        </ThemeProvider> */}
        <AuthProvider>
          <Navbar/>
          <Login/>
          <Dashboard/>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;

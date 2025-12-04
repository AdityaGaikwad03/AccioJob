import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About  from "./pages/About";
import Contact from "./pages/Contact";
import UserDetails from "./pages/UserDetails";
import Products from "./pages/Product";
import Post from "./pages/Postdetails";
import Movies from "./pages/Movies";
import Team from "./pages/Team";
import Company from "./pages/Company";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Billing from "./pages/Billing";

import "./App.css";

function App() {
  return (
    <div className="App-shell">
      <div className="assignment-card">
        <h1>React Router Dom</h1>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />}/>
            <Route path="company" element ={<Company/>}/>
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path = "/movies/:id" element = {<Movies/>} />
          <Route path = "/dashboard" element ={<Dashboard />}> 
            <Route path="profile" element={<Profile />}/>
            <Route path="setting" element ={<Setting />}/>
            <Route path="billing" element ={<Billing />}/>
          </Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About  from "./pages/About";
import Contact from "./pages/Contact";
import UserDetails from "./pages/UserDetails";
import Products from "./pages/Product";
import Post from "./pages/Postdetails";
import "./App.css";

function App() {
  return (
    <div className="App-shell">
      <div className="assignment-card">
        <h1>React Router Dom</h1>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/posts/:postId" element={<Post />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;

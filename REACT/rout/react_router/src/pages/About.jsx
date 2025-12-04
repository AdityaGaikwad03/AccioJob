import { Outlet, Route } from "react-router-dom";
import { Link } from "react-router-dom";
export default function About() {
    return (
        <div>
            <h2>About Page</h2>
            <p>This is the about page of our React Router example.</p>
            <nav style={{display: "flex", gap: "20px"}}>
              <Link to = {"team"}>Team</Link>
              <Link to = {"company"}>Company</Link>
            </nav>
            <hr/>
            <Outlet/>
        </div>
    );
}
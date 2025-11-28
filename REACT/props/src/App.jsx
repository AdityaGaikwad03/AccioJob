import React from "react";
import "./App.css";
import ConRender from "./Components/conditional_rendering.jsx";
import PropDrilling from "./Components/Prop_Drilling_and_children_prop.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <Greeting name="Jay" age={26} />
        <UserCard name="Aayush" age={30} place="Pune" />
        <Active isActive={false} />
        <Numbers nums={[10, 20, 30, 40]} />
        <User info={{ name: "Jay", age: 26, place: "Pune" }} />

        <h2>Task 1</h2>
        <Button text="Login" color="green" />
        <Button text="Signup" color="blue" />
        <Button text="Logout" color="red" />

        <h2>Task 2</h2>
        <ProductCard title="iPhone 15" price={799} inStock={true} />
        <ProductCard title="Headphones" price={1699} inStock={false} />

        <UserProfile
          user={{
            name: "Aarav",
            age: 21,
            email: "aarav@mail.com",
            skills: ["HTML", "CSS", "React"],
          }}
        />

        <h2>Task 3</h2>
        <ConRender />

        <h2>Task 4</h2>
        <PropDrilling />
      </div>
    </div>
  );
}

function Greeting(props) {
  return <h2>Hello {props.name} Age: {props.age}</h2>;
}

function UserCard(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Place: {props.place}</p>
    </div>
  );
}

function Active(props) {
  return (
    <div>
      {props.isActive ? <h2>You are active</h2> : <h2>You are not active</h2>}
    </div>
  );
}

function Numbers(props) {
  return (
    <ul>
      {props.nums.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
  );
}

function User(props) {
  return (
    <div>
      <p>{props.info.name}</p>
      <p>{props.info.age}</p>
      <p>{props.info.place}</p>
    </div>
  );
}

function Button({ text, color }) {
  return (
    <button style={{ background: color, padding: "10px" }}>
      {text}
    </button>
  );
}

function ProductCard({ title, price, inStock }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>${price}</p>
      {inStock ? (
        <span style={{ color: "green" }}>In Stock</span>
      ) : (
        <span style={{ color: "red" }}>Out of Stock</span>
      )}
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <h3>Skills:</h3>
      <ul>
        {user.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </>
  );
}

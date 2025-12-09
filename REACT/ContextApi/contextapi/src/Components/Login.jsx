import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
  let {user, login} = useContext(AuthContext);
  let [username, setUsername] = useState("");

  function handleLogin() {
    if(username.trim() === "") return;
    login(username);
    setUsername("");
  }

  if(user) {
    return;
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange = {(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
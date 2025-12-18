import { useContext } from "react";
import { UserPreferencesContext } from "./UserPreferencesContext";

export default function Settings() {
  const { username, setUsername, theme } =
    useContext(UserPreferencesContext);

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Preview as {username} · Theme: {theme}</p>
    </div>
  );
}

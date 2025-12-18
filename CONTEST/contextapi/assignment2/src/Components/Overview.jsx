import { useContext, useEffect, useState } from "react";
import { UserPreferencesContext } from "./UserPreferencesContext";

export default function Overview() {
  const { username, theme, setTheme } = useContext(UserPreferencesContext);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setNotifications(["Welcome!", "New update available"]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <h2>Hello {username}</h2>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : notifications.length ? (
        <ul>{notifications.map((n, i) => <li key={i}>{n}</li>)}</ul>
      ) : (
        <p>No notifications.</p>
      )}
    </div>
  );
}

export default function ChatMessage({ message, sender }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {sender === "bot" && (
        <img
          src="https://plus.unsplash.com/premium_vector-1725752429429-4cfc5380880b"
          alt="chatbot icon"
          width="20"
          style={{ borderRadius: "50%" }}
        />
      )}

      <p>{message}</p>

      {sender === "user" && (
        <img
          src="https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b"
          alt="user icon"
          width="20"
          style={{ borderRadius: "50%" }}
        />
      )}
    </div>
  );
}

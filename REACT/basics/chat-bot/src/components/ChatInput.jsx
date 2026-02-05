import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  function sendMessage() {
    if (!text.trim()) return;

    // send user message
    onSend(text);

    // get bot reply (Chatbot is global)
    const botReply = Chatbot.getResponse(text);

    // send bot message
    onSend(botReply, "bot");

    setText("");
  }

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Send a message to ChatBot"
        size={30}
      />
      <button className="chat-input-btn" onClick={sendMessage}>Send</button>
    </>
  );
}

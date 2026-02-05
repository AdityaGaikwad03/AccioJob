import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
export default function ChatList() {
   const [messages, setMessages] = useState([]);

   function addMessage(text, sender = "user") {
  setMessages(prev => [
    ...prev,
    {
      id: `id${prev.length + 1}`,
      message: text,
      sender
    }
  ]);
}
  return (
    <div className="chat-list">
      {messages.map(chat => (
        <ChatMessage
          key={chat.id}
          message={chat.message}
          sender={chat.sender}
        />
      ))}
         <ChatInput onSend={addMessage} />
    </div>
  );
}

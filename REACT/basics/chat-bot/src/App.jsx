import './App.css'
import ChatInput from './components/ChatInput'
import ChatMessage from './components/ChatMessage'

function App() {
  return (
    <>
      <ChatInput />
      <ChatMessage 
        message = "Hello ChatBot" 
        sender = "user"
      />
      <ChatMessage 
        message = "Hello how can i help you?" 
        sender = "bot"
      />
      <ChatMessage 
        message = "can you get me todays date?" 
        sender = "user"
      />
      <ChatMessage 
        message = "todays date is 2024-05-15" 
        sender = "bot"
      />
    </>
  )
}

export default App

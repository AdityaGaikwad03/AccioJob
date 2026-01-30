export default function ChatMessage({message, sender}) {
    return (
        <div>
            {sender === "bot" &&  
                (
                <img src="https://plus.unsplash.com/premium_vector-1725752429429-4cfc5380880b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="chatbot icon" width="20px" style={{borderRadius : "50%"}}/>
                )
            }
            {message}
            {sender === "user" && 
                (
                    <img src="https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user icon" width="20px" style={{borderRadius : "50%"}}/>
                )
            }
        </div>
    )
}

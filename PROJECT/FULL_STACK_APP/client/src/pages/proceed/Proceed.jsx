import React, { useState } from 'react'
import './Proceed.css'
import { GoogleGenAI } from "@google/genai";

const Proceed = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [question, setQuestion] = useState('')


    const ai = new GoogleGenAI({ apiKey: 'AIzaSyD6u9R9YUCThF6-tXRA9wpXBICG4bAJ7Ys' });

    async function main() {
        if (!question) return;
        setIsLoading(true);
        try{
            const response = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: `improve the below statement check grammer and just reply as a single statement as your response is going to be shown directly in the UI  ${question}`,
            });
            const improvedText = typeof response.text === 'function' ? response.text() : response.text;
            setQuestion(improvedText)
        } catch (error) {
            console.error("Error improving message:", error);
            alert("Failed to improve message. Please try again.");
        } finally {
            // Stop loading regardless of success or failure
            setIsLoading(false);
        }
    }

    const handleQuestion = (e) =>{
        e.preventDefault();
        console.log(question)
        main();
    }
  return (
    <div className="login">
        <form>
            <h1>How would you like to start the conversation?</h1>
            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                id="message"
                // 2. Control the value so state updates reflect in the UI
                value={question} 
                type="textarea"
                cols="3"
                rows="6"
                placeholder="Enter your message"
                onChange={(e) => setQuestion(e.target.value)}
                required
                // Optional: Disable input while AI is thinking
                disabled={isLoading} 
            />
            
            <button type="submit">Send Mail</button>
            
            {/* 3. Update button UI based on loading state */}
            <button 
                onClick={(e) => handleQuestion(e)}
                disabled={isLoading}
                style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
            >
                {isLoading ? 'Improving...' : 'Improve Message'}
            </button>
        </form>
    </div>
  )
}

export default Proceed
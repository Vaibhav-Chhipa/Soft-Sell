import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const ChatWidget = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant for software licensing." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const openai = new OpenAIApi(
    new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Set this in your .env file
    })
  );

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: newMessages,
      });

      setMessages([...newMessages, response.data.choices[0].message]);
    } catch (error) {
      console.error("Chat error:", error);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-80 z-50 p-4 text-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Chat with Us</h3>
      <div className="h-48 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-2 rounded mb-2">
        {messages
          .filter((msg) => msg.role !== "system")
          .map((msg, idx) => (
            <div
              key={idx}
              className={`mb-1 ${msg.role === "user" ? "text-right" : "text-left"}`}
            >
              <p className="px-2 py-1 inline-block rounded bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-white">
                {msg.content}
              </p>
            </div>
          ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-2 py-1 border rounded-l text-gray-900 dark:text-white bg-white dark:bg-gray-700"
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-4 py-1 bg-blue-600 text-white rounded-r hover:bg-blue-700"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;

// components/Chat.tsx
import React, { useState } from "react";

interface Message {
	sender: string;
	content: string;
}

interface ChatProps {
	initialMessages: Message[];
	onSendMessage: (message: Message) => void;
}

const Chat: React.FC<ChatProps> = ({ initialMessages, onSendMessage }) => {
	const [messages, setMessages] = useState<Message[]>(initialMessages);
	const [newMessage, setNewMessage] = useState("");

	const handleSendMessage = () => {
		if (newMessage.trim() === "") return;

		const message: Message = {
			sender: "Patient",
			content: newMessage
		};

		setMessages([...messages, message]);
		setNewMessage("");
		onSendMessage(message);
	};

	return (
		<div className="message-section">
			{messages.map((message, index) => (
				<div
					key={index}
					className={`message ${
						message.sender === "Patient" ? "sent" : "received"
					} mb-2 p-2 border rounded-lg`}
				>
					<strong>{message.sender}:</strong> {message.content}
				</div>
			))}
			<div className="d-flex mb-3">
				<input
					type="text"
					className="form-control p-2 border border-gray-300 rounded w-full"
					placeholder="Type a message..."
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
				/>
				<button
					className="btn btn-secondary ml-2 p-2 bg-gray-700 text-white rounded"
					onClick={handleSendMessage}
				>
					Send Message
				</button>
			</div>
		</div>
	);
};

export default Chat;

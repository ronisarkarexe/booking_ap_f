import React, { useEffect, useState } from "react";

interface Chat {
  _id: string;
  name: string;
  phone: string;
}

const ChatDetails: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/chat", {
          method: "GET",
        });
        if (!response.ok) {
          const data = await response.json();
          setError(data.message || "Failed to fetch chats.");
          return;
        }
        const data = await response.json();
        setChats(data.data);
      } catch {
        setError("An error.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Chats</h3>
      {isLoading ? (
        <p>Loading chats...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : chats.length > 0 ? (
        <div className="space-y-4">
          {chats.map((chat) => (
            <div
              key={chat._id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">{chat.name}</p>
                <p className="text-sm text-gray-600">{chat.phone}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No chats available.</p>
      )}
    </div>
  );
};

export default ChatDetails;

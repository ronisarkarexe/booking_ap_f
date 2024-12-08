import React, { useState } from "react";

const ChatVerifyComponent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setErrorMessage("Name and Phone number are required.");
      return;
    }
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setErrorMessage("Token not found. Please log in.");
      return;
    }
    const payload = {
      name,
      phone,
    };
    setIsLoading(true);
    setErrorMessage("");
    try {
      const verifyResponse = await fetch(
        "http://localhost:8000/api/v1/user/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const verifyData = await verifyResponse.json();
      if (!verifyResponse.ok) {
        setErrorMessage(verifyData.message);
        setIsLoading(false);
        return;
      }

      const chatResponse = await fetch(
        "http://localhost:8000/api/v1/chat/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const chatData = await chatResponse.json();
      if (chatResponse.ok) {
        alert("Chat started successfully!");
        setName("");
        setPhone("");
      } else {
        setErrorMessage(chatData.message);
      }
    } catch {
      setErrorMessage("An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
      <button
        type="submit"
        className="bg-custom text-white px-4 py-2 rounded-lg hover:bg-custom/90 w-full"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Start Chat"}
      </button>
    </form>
  );
};

export default ChatVerifyComponent;

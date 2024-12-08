import { useState } from "react";
import { useUser } from "../useUser";
import ChatVerifyComponent from "./chat-verify-component";
import ChatFeedbackComponent from "./chat-feedback-component";

const ChatComponent = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const { user } = useUser();

  const toggleChat = () => {
    setIsChatVisible((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" id="chat-widget">
      <button
        onClick={toggleChat}
        className={`${
          !isChatVisible ? "show" : "hidden"
        } bg-custom text-white p-4 rounded-full shadow-lg hover:bg-custom/90`}
      >
        <i className="fas fa-comments text-xl"></i>
      </button>
      <div
        className={`bg-white rounded-lg shadow-lg w-96 ${
          isChatVisible ? "show" : "hidden"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-semibold">Chat with Service Provider</h3>
          <button className="text-gray-500 hover:text-gray-700">
            <i onClick={toggleChat} className="fas fa-times"></i>
          </button>
        </div>
        <div
          className="h-80 p-4 overflow-y-auto"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="flex flex-col space-y-4">
            {!user?.isVerify ? (
              <div className="p-4">
                <ChatVerifyComponent />
              </div>
            ) : (
              <>
                <div className="items-start">
                  <div className="flex-shrink-0"></div>
                  <div className="ml-3 bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm">Hello! How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="mr-3 bg-custom text-white rounded-lg p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm">
                      Hi, I&#39;m interested in booking a tour package.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0"></div>
                  <div className="ml-3 bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm">
                      I&#39;d be happy to help you with that! Could you please
                      tell me your preferred destination and travel dates?
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {user?.isVerify && (
            <div
              className="border-t border-gray-200 mt-4 pt-4"
              id="chat-rating"
            >
              <ChatFeedbackComponent />
            </div>
          )}
          <div className="hidden text-center py-4" id="thank-you-message">
            <p className="text-lg font-semibold text-green-600">
              Thank you for your feedback!
            </p>
            <p className="text-sm text-gray-600">
              Your input helps us improve our service.
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          {user?.isVerify && (
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-custom focus:border-custom"
              />
              <button className="bg-custom text-white px-4 py-2 rounded-lg hover:bg-custom/90">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;

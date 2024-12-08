const ChatFeedbackComponent = () => {
  return (
    <div className="text-center">
      <p className="text-sm text-gray-600 mb-2">
        How would you rate this conversation?
      </p>
      <div className="flex justify-center space-x-2 mb-4">
        <button className="text-2xl text-gray-400 hover:text-yellow-400 focus:text-yellow-400">
          ★
        </button>
        <button className="text-2xl text-gray-400 hover:text-yellow-400 focus:text-yellow-400">
          ★
        </button>
        <button className="text-2xl text-gray-400 hover:text-yellow-400 focus:text-yellow-400">
          ★
        </button>
        <button className="text-2xl text-gray-400 hover:text-yellow-400 focus:text-yellow-400">
          ★
        </button>
        <button className="text-2xl text-gray-400 hover:text-yellow-400 focus:text-yellow-400">
          ★
        </button>
      </div>
      <textarea
        placeholder="Share your feedback (optional)"
        className="w-full p-2 border border-gray-300 rounded-lg mb-2 text-sm"
      ></textarea>
      <button className="bg-custom text-white px-4 py-2 rounded-lg hover:bg-custom/90 w-full text-sm">
        Submit Feedback
      </button>
    </div>
  );
};

export default ChatFeedbackComponent;

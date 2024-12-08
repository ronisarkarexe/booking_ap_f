import ChatDetails from "./chat-details";
import DashboardDetails from "./dashboard-details";

const DashboardComponent = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardDetails />
        <ChatDetails />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Booking Analytics</h3>
              <select className="border rounded-lg px-5 py-2">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-80 bg-gray-50 rounded-lg"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Recent Activities</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-custom/10 p-2 rounded-lg">
                  <i className="fas fa-plane text-custom"></i>
                </div>
                <div className="ml-4">
                  <p className="font-medium">New Booking</p>
                  <p className="text-sm text-gray-600">
                    Emma S. booked Tokyo Tour
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-custom/10 p-2 rounded-lg">
                  <i className="fas fa-comment text-custom"></i>
                </div>
                <div className="ml-4">
                  <p className="font-medium">New Review</p>
                  <p className="text-sm text-gray-600">
                    Alex K. left a 5-star review
                  </p>
                  <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-custom/10 p-2 rounded-lg">
                  <i className="fas fa-user text-custom"></i>
                </div>
                <div className="ml-4">
                  <p className="font-medium">New Customer</p>
                  <p className="text-sm text-gray-600">
                    Lisa M. created an account
                  </p>
                  <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Total Bookings</h3>
              <i className="fas fa-calendar text-custom text-xl"></i>
            </div>
            <p className="text-3xl font-bold">2,456</p>
            <p className="text-gray-600 text-sm mt-2">+18% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Revenue</h3>
              <i className="fas fa-dollar-sign text-custom text-xl"></i>
            </div>
            <p className="text-3xl font-bold">$78,945</p>
            <p className="text-gray-600 text-sm mt-2">+22% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Active Users</h3>
              <i className="fas fa-users text-custom text-xl"></i>
            </div>
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-gray-600 text-sm mt-2">+25% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Reviews</h3>
              <i className="fas fa-star text-custom text-xl"></i>
            </div>
            <p className="text-3xl font-bold">4.9</p>
            <p className="text-gray-600 text-sm mt-2">Based on 1000+ reviews</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Upcoming Tours</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Paris City Tour</p>
                  <p className="text-sm text-gray-600">15 Bookings</p>
                </div>
                <p className="text-custom font-medium">Mar 25</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">London Explorer</p>
                  <p className="text-sm text-gray-600">12 Bookings</p>
                </div>
                <p className="text-custom font-medium">Mar 28</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Tokyo Adventure</p>
                  <p className="text-sm text-gray-600">18 Bookings</p>
                </div>
                <p className="text-custom font-medium">Apr 2</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Popular Destinations</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=Paris Eiffel Tower at sunset&width=80&height=80&flag=f800b58c-6cfa-4816-af38-8a85301c9ab1&flag=49b1426c-c39b-4b75-b41b-37e6b45134c1"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4 flex-1">
                  <p className="font-medium">Paris, France</p>
                  <p className="text-sm text-gray-600">245 Bookings</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-custom rounded-full h-2"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=London Big Ben landmark&width=80&height=80&flag=9f2f3e0b-f887-45f6-9b6d-b7d888523a48&flag=596b2b94-584b-4ae8-8578-d67a4d035a9b"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4 flex-1">
                  <p className="font-medium">London, UK</p>
                  <p className="text-sm text-gray-600">198 Bookings</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-custom rounded-full h-2"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=Tokyo city skyline at night&width=80&height=80&flag=3084a5a8-0caf-4def-8fda-243027c7f36b&flag=fa6918ed-1303-4f10-aad8-fc6515ce9cc9"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4 flex-1">
                  <p className="font-medium">Tokyo, Japan</p>
                  <p className="text-sm text-gray-600">167 Bookings</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-custom rounded-full h-2"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;

import { Link } from "react-router-dom";

const DashboardDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
      <Link to="/dashboard/add-category">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <i className="fas fa-plus-circle text-custom text-xl"></i>
            <h3 className="text-lg font-semibold">Add Category</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DashboardDetails;

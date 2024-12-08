import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home.page";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import DashboardComponent from "./components/Dashboard/dashboard.component";
import AddCategory from "./components/Dashboard/add-catagory";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/dashboard/add-category" element={<AddCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

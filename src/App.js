import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import UserDashboard from "./components/user/UserDashboard";
import AdminDashboard from "./components/admin/Dashboard";
import StoreDashboard from "./components/storeOwner/StoreDashboard";
import Unauthorized from "./components/common/Unauthorized";

const BASE_URL = "http://localhost:8080";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={["USER"]} />}>
            <Route path="/" element={<UserDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["STORE_OWNER"]} />}>
            <Route path="/store" element={<StoreDashboard />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" />} />

          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>

        

      </Router>
    </AuthProvider>
  );
}

export default App;

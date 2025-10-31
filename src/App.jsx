import { Routes, Route, Navigate } from "react-router-dom";
import MobileLogin from "./pages/MobileLogin";
import OTPVerify from "./pages/OTPVerify";
import RestaurantList from "./pages/RestaurantList";
import RestaurantDetail from "./pages/RestaurantDetail";

function Protected({ children }) {
  const logged = localStorage.getItem("fastor_logged");
  return logged ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MobileLogin />} />
      <Route path="/otp" element={<OTPVerify />} />
      <Route
        path="/restaurants"
        element={
          <Protected>
            <RestaurantList />
          </Protected>
        }
      />
      <Route
        path="/restaurants/:id"
        element={
          <Protected>
            <RestaurantDetail />
          </Protected>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
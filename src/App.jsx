import { Routes, Route, Navigate } from "react-router-dom";
import MobileLogin from "./Pages/MobileLogin";
import OTPVerify from "./Pages/OTPVerify";
import RestaurantList from "./Pages/RestaurantList";
import RestaurantDetail from "./Pages/RestaurantDetail";

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
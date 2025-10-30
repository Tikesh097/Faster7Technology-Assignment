import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OTPVerify() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verify = (e) => {
    e.preventDefault();
    if (otp.trim() === "123456") {
      localStorage.setItem("fastor_logged", "true");
      navigate("/restaurants");
    } else {
      alert("Invalid OTP. Use 123456 for demo.");
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 420, margin: "40px auto" }}>
        <h2>Enter OTP</h2>
        <p className="small">We sent an OTP to {localStorage.getItem("fastor_mobile") || "your number"}</p>
        <form onSubmit={verify}>
          <input
            type="number"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit">Verify</button>
        </form>
      </div>
    </div>
  );
}

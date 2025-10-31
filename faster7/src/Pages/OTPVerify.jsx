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
    <>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="card"
          style={{
            maxWidth: 420,
            margin: "40px auto",
            backgroundColor: "rgba(0, 0, 0, 0.57)",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "white" }}>Enter OTP</h2>
          <p style={{ fontSize: "14px", color: "#bab9b9ce", marginBottom: "20px" }}>
            We sent an OTP to{" "}
            <strong>{localStorage.getItem("fastor_mobile") || "your number"}</strong>
          </p>

          <form onSubmit={verify}>
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#0656abff",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
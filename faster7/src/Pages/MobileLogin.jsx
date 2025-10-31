import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileLogin() {
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        const cleaned = mobile.trim();
        if (cleaned.length < 6) {
            alert("Enter a valid mobile number (min 6 digits for demo).");
            return;
        }
        localStorage.setItem("fastor_mobile", cleaned);
        navigate("/otp");
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
                    <h2 style={{ marginBottom: "10px",color: "white" }}>Login</h2>
                    <p style={{ fontSize: "14px", color: "#bab9b9ce" }}>
                        Enter your mobile number. OTP will be <strong>123456</strong> (demo).
                    </p>
                    <form onSubmit={submit} style={{ marginTop: "20px" }}>
                        <input
                            type="tel"
                            placeholder="Mobile number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
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
                            Send OTP
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

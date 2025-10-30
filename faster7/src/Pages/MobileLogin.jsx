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
        <div className="container">
            <div className="card" style={{ maxWidth: 420, margin: "40px auto" }}>
                <h2>Fastor Login</h2>
                <p className="small">Enter your mobile number. OTP will be <strong>123456</strong> (demo).</p>
                <form onSubmit={submit}>
                    <input
                        type="tel"
                        placeholder="Mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <button type="submit">Send OTP</button>
                </form>
            </div>
        </div>
    );
}

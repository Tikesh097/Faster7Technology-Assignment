import { useNavigate } from "react-router-dom";
import logo from "../assets/taj2.jpg"; // you can replace this with fastor-logo if preferred

export default function Header({ title = "Hotel Taj" }) {
  const navigate = useNavigate();

  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #eee",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => navigate("/restaurants")}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 8 }}
        />
        <h2 style={{ fontSize: "1.2rem", color: "#333" }}>{title}</h2>
      </div>

      <button
        onClick={() => navigate("/")}
        style={{
          border: "none",
          background: "#ff3d00",
          color: "white",
          padding: "8px 14px",
          borderRadius: 6,
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </header>
  );
}

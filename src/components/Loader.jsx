import React from "react";

export default function Loader({ text = "Loading..." }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          border: "4px solid #ddd",
          borderTopColor: "#ff3d00",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginBottom: 12
        }}
      ></div>
      <p style={{ color: "#555", fontSize: "1rem" }}>{text}</p>

      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
